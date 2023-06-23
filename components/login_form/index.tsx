"use client"

import { FormEvent } from "react";
import Dialog from "../warning";

async function sendForm(e:FormEvent){
    e.preventDefault()
    document.querySelector("#wait")?.classList.remove("flex")
    document.querySelector("#wait")?.classList.add("hidden")
    document.querySelector("#wrong")?.classList.remove("flex")
    document.querySelector("#wrong")?.classList.add("hidden")
    document.querySelector("#required")?.classList.remove("flex")
    document.querySelector("#required")?.classList.add("hidden")
    document.querySelector("#error")?.classList.remove("flex")
    document.querySelector("#error")?.classList.add("hidden")
    const target = e.target as typeof e.target & {
        uname:{value:string},
        passwd:{value:string},
    }
    const uname = target.uname.value;
    const passwd = target.passwd.value;
    if(uname == '' || passwd == ''){
        document.querySelector("#required")?.classList.add("flex")
        document.querySelector("#required")?.classList.remove("hidden")
        return
    }
    document.querySelector("#wait")?.classList.add("flex")
    document.querySelector("#wait")?.classList.remove("hidden")
    const res = await fetch("/api/login/check", {
        method: "POST",
        body:JSON.stringify({
            uname:uname,
            passwd:passwd,
        }),
        cache:'no-store'
    });
    if(res.status === 401){
        document.querySelector("#wait")?.classList.remove("flex")
        document.querySelector("#wait")?.classList.add("hidden")
        document.querySelector("#wrong")?.classList.add("flex")
        document.querySelector("#wrong")?.classList.remove("hidden")
        return
    }
    if(!res.ok){
        document.querySelector("#wait")?.classList.remove("flex")
        document.querySelector("#wait")?.classList.add("hidden")
        document.querySelector("#error")?.classList.add("flex")
        document.querySelector("#error")?.classList.remove("hidden")
        return
    }
    // FIXME: this doesn't feel good.
    window.location.href = '/in'
}
export default function LoginForm(){
    return(
        <form onSubmit={(e)=>{sendForm(e)}} className="w-full p-8 bg-[#B2C8F7] rounded-3xl flex flex-col items-center gap-4 shadow-2xl">
                <h1 className=" text-2xl font-semibold">Log in to SkyChat</h1>
                <div>
                <label htmlFor='uname'>Username:</label>
                <input type="text" className="ml-2 outline outline-2 outline-slate-800 p-1" name="uname" id="uname"></input>
                </div>
                <div>
                <label htmlFor='passwd'>Password:</label>
                <input type="password" className="ml-2 outline outline-2 outline-slate-800 p-1" name="passwd" id="passwd"></input>
                </div>
                <input type="submit" value={"Submit"} className="bg-[#F35627] cursor-pointer font-semibold text-white p-2 rounded-md"></input>
                <Dialog status="loading" message="Hold on..." id="wait"/>
                <Dialog status="error" icon="security" message="Wrong username or password" id="wrong"/>
                <Dialog status="info" icon="security" message="Type in your username and password" id="required"/>
                <Dialog status="warn" icon="error" message="Something went wrong" secondary="It might be our fault actually." id="error"/>

            </form>
    )
}