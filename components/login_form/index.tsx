"use client"

import Dialog from "../warning";
import { translate } from "@/lang";
import { sendForm } from "./sendform";

export default function LoginForm({lang}:{lang:string}){
    const dict = translate(lang)

    return(
        <form onSubmit={(e)=>{sendForm(e, lang)}} className="w-fit p-8 mx-auto bg-[#B2C8F7] rounded-3xl flex flex-col items-center gap-4 shadow-2xl">
                <h1 className=" text-2xl font-semibold">{dict.login.title}</h1>
                <div className="grid grid-cols-[max-content_auto] text-right gap-2 w-full">

                <label htmlFor='uname'>{dict.login.username}</label>
                <input type="text" className="ml-2 outline outline-2 outline-slate-800 p-1" name="uname" id="uname"></input>
                <label htmlFor='passwd'>{dict.login.password}</label>
                <input type="password" className="ml-2 outline outline-2 outline-slate-800 p-1" name="passwd" id="passwd"></input>
                </div>
                <input type="submit" value={dict.login.submit} className="bg-[#F35627] cursor-pointer font-semibold text-white p-2 rounded-md"></input>
                <Dialog status="loading" message={dict.login.warnings.wait} id="wait"/>
                <Dialog status="error" icon="security" message={dict.login.warnings.wrong} id="wrong"/>
                <Dialog status="info" icon="security" message={dict.login.warnings.nopass} id="required"/>
                <Dialog status="warn" icon="error" message={dict.login.warnings.err[0]} secondary={dict.login.warnings.err[1]} id="error"/>

            </form>
    )
}