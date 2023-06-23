"use client"

import Message from "@/components/message"
import fetchMessages from "@/lib/fetch_messages";
import MessageObject from "@/lib/types/message"
import { MutableRefObject, useEffect, useState } from "react"

export default function PublicMessageFeed(props:{session:string, callbackRef:MutableRefObject<()=>void>}){
    const [messages, setMessages] = useState([]);
    useEffect(()=>{const i = setTimeout(()=>{fetchMessages(props.session, setMessages)}, 0); return ()=>{clearTimeout(i)}}, [props.session])
    useEffect(
        ()=>{
            props.callbackRef.current = ()=>{
                setTimeout(()=>{fetchMessages(props.session, setMessages)}, 0)
            }
        },
        [props.session]
    )
    return (
    <div className="flex flex-col gap-8">
    {messages.map((message:MessageObject, index)=>{
        return <Message img="/user-blue.png" user={message.user} content={message.content} time={message.added} key={index + 1} />
    })}
    </div>
    )
}