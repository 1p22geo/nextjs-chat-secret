import { FormEvent } from "react";
import { sendForm } from "./sendform";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export function createSendForm(router:AppRouterInstance, session:string){
    return async (e:FormEvent<HTMLFormElement>)=>{await sendForm(e, router, session)}
    
}