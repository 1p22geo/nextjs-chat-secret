"use client"
import { Dispatch, SetStateAction } from "react";

export default async function fetchMessages(session:string, setMessages:Dispatch<SetStateAction<never[]>>, callback?:()=>void){
    // console.log("Starting fetchMessages")
    const url = "/api/messages?session="+session + "&n=5"
    // console.log(url)
    let res:Response;
    res = await fetch(url);
    for(let n =0;n<10;n++){
        if(res.ok)break;
        res = await fetch(url);
    }
    if(res.ok){
    const json = await res.json()
    // console.log(json)
    setMessages(json.res)
    }
    else{
        // console.log(res)
    }
    if(callback)callback();
}