"use client"
import { Dispatch, SetStateAction } from "react";

export default async function fetchNews(session:string, setMessages:Dispatch<SetStateAction<never[]>>, callback?:()=>void){
    // console.log("Starting fetchMessages")
    const messageNumItem = localStorage.getItem("skyChatConfig.MaxMessageNum")
    let initMessageNum = 4;
    if(messageNumItem){
        try{
            initMessageNum = parseInt(messageNumItem.toString())
        }
        catch{
            initMessageNum = 4;
        }
    }
    const url = "/api/messages/news?session="+session + "&n=" + initMessageNum
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