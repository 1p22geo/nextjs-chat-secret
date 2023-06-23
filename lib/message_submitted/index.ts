"use client"
import { FormEvent, MutableRefObject } from "react";

export default async function MessageSubmittedHandler(e:FormEvent<HTMLFormElement>, session:string, callbackRef:MutableRefObject<()=>void>){
    e.preventDefault()
    const messageInput = document.querySelector("#msg") as HTMLInputElement
    if(messageInput == null){
        //DEBUG
        throw "No message input found"
    }
    const value = messageInput.value;
    
    const sending = document.querySelector("#sending")
    if(sending == null){
        //DEBUG
        throw "No sending warning component found"
    }
    sending.classList.remove("hidden")
    sending.classList.add("flex")
    
    let res = {ok:false};
    for(let n =0;n<10;n++){
    res = await fetch("/api/messages/send", {
        method: "POST",
        body:JSON.stringify({
            session:session,
            content:value
        })
    });
    if(res.ok){
        break;
    }
    }

    sending.classList.add("hidden")
    sending.classList.remove("flex")
    if(!res.ok){
        document.querySelector("#sendingfailed")?.classList.add("flex")
        document.querySelector("#sendingfailed")?.classList.remove("hidden")
        setTimeout(()=>{
            document.querySelector("#sendingfailed")?.classList.add("hidden")
            document.querySelector("#sendingfailed")?.classList.remove("flex")
        }, 1000)
    }
    messageInput.value = "";
    callbackRef.current()

    return false;
}