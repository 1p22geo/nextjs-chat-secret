"use client"
import "client-only"
import PublicMessageFeed from "./public";

import MessageSendForm from "@/components/new_message/enabled";
import MessageSubmittedHandler from "@/lib/message_submitted";
import { useRef } from "react";

const GeneralMessageFeedComponent = ({type, session}:{type:string, session:string}) => {
    const callbackRef = useRef(()=>{})
    switch(type){
        case "public":
            return ( <>
            <PublicMessageFeed callbackRef={callbackRef} session={session}/>
            <MessageSendForm session={session} callbackRef={callbackRef} onSubmit={MessageSubmittedHandler} />
            </> );
        // add cases dev, news and maybe private
        }

    }
 
export default GeneralMessageFeedComponent;