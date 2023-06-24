"use client"
import "client-only"
import PublicMessageFeed from "./public";

import MessageSendForm from "@/components/new_message/enabled";
import MessageSubmittedHandler from "@/lib/message_submitted";
import { useRef } from "react";

const GeneralMessageFeedComponent = ({type, session, lang}:{type:string, session:string, lang:string}) => {
    const callbackRef = useRef(()=>{})
    switch(type){
        case "public":
            return ( <>
            <PublicMessageFeed lang={lang} callbackRef={callbackRef} session={session}/>
            <MessageSendForm lang={lang} session={session} callbackRef={callbackRef} onSubmit={MessageSubmittedHandler} />
            </> );
        // add cases dev, news and maybe private
        }

    }
 
export default GeneralMessageFeedComponent;