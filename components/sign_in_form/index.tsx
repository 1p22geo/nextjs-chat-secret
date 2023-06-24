"use client"

import { FormEvent } from "react";
import Dialog from "../warning";
import Link from "next/link";

async function sendForm(e:FormEvent){
    e.preventDefault()
    const target = e.target as typeof e.target & {
        uname:{value:string},
        email:{value:string},
        passwd:{value:string},
        rpass:{value:string},
    }
    const email = target.email.value;
    const uname = target.uname.value;
    const passwd = target.passwd.value;
    const rpass = target.rpass.value;
   //console.log(email, uname, passwd, rpass)
    document.querySelector("#warning_repeat")?.classList.remove("flex")
    document.querySelector("#warning_repeat")?.classList.add("hidden")
    document.querySelector("#warning_len")?.classList.remove("flex")
    document.querySelector("#warning_len")?.classList.add("hidden")
    document.querySelector("#warning_data")?.classList.remove("flex")
    document.querySelector("#warning_data")?.classList.add("hidden")
    document.querySelector("#created")?.classList.remove("flex")
    document.querySelector("#created")?.classList.add("hidden")
    document.querySelector("#user_conflict")?.classList.remove("flex")
    document.querySelector("#user_conflict")?.classList.add("hidden")
    document.querySelector("#creating")?.classList.remove("flex")
    document.querySelector("#creating")?.classList.add("hidden")
    if(passwd !== rpass){
        document.querySelector("#warning_repeat")?.classList.remove("hidden")
        document.querySelector("#warning_repeat")?.classList.add("flex")
        return
    }
    if(passwd.length<8){
        document.querySelector("#warning_len")?.classList.remove("hidden")
        document.querySelector("#warning_len")?.classList.add("flex")
        return
    }
    document.querySelector("#creating")?.classList.add("flex")
    document.querySelector("#creating")?.classList.remove("hidden")
    
    const res = await fetch("/api/login/signup", {
        method: "POST",
        body:JSON.stringify({
            uname:uname,
            email:email,
            passwd:passwd,
            rpass:rpass
        }),
        cache:'no-store'
    });
    if(!res.ok){
        if(res.status == 409){
            document.querySelector("#user_conflict")?.classList.add("flex")
            document.querySelector("#user_conflict")?.classList.remove("hidden")
            
        }
        else{
            document.querySelector("#warning_data")?.classList.add("flex")
            document.querySelector("#warning_data")?.classList.remove("hidden")
        }
    }
    else{
        document.querySelector("#created")?.classList.add("flex")
        document.querySelector("#created")?.classList.remove("hidden")
        
    }
    document.querySelector("#creating")?.classList.remove("flex")
    document.querySelector("#creating")?.classList.add("hidden")

}
export default function SignInForm(props:{lang:string}){
    return(
        <form onSubmit={sendForm} className="p-8 bg-[#B2C8F7] max-w-[600px] rounded-3xl shadow-2xl mx-auto flex flex-col items-center gap-4">
                <h1 className=" text-2xl font-semibold">Sign in to SkyChat</h1>
                <div className="sm:grid sm:grid-cols-[max-content_auto] flex flex-col items-center text-right gap-2 w-full">
                    <label htmlFor='uname'>Username:</label>
                    <input type="text" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" name="uname" id="uname"></input>
                    
                    <label htmlFor='email'>E-mail address:</label>
                    <input type="email" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" name="email" id="email"></input>
            
                    <label htmlFor='passwd'>Password:</label>
                    <input type="password" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" name="passwd" id="passwd"></input>
                    
                    <label htmlFor='rpass'>Repeat password:</label>
                    <input type="password" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" name="rpass" id="rpass"></input>
                </div>
                    <Dialog status="error" icon="error" message="The repeated password must be the same as the original password" id="warning_repeat" />
                    <Dialog status="error" message="A good password is at least 8 characters long." id="warning_len" icon="security" />
                    <Dialog status="warn" icon="error" message="Something went wrong" id="warning_data" secondary="The data seemed good here, but the server had problems with it" />
                    <Dialog status="warn" icon="info" message="A user with this username already exists" secondary="Pick a different one or add a digit at the end or smth idk." id="user_conflict"/>
                    <Dialog status="success" icon="tick" message="Account created" id="created" secondary="You can now log in" >
                        <Link href={'/'+props.lang+'/login'} className="hover:underline font-bold text-[#07600E]">
                            here
                        </Link>
                    </Dialog>
                    <Dialog status="loading" message="Creating account..." id="creating"/>
                <input type="submit" value={"Submit"} className="bg-[#F35627] cursor-pointer font-semibold text-white p-2 rounded-md"></input>
            </form>
    )
    /*
                    <div className=" col-span-1 col-start-2 bg-[#FF9B9B] border-l-4  border-[#CF1124] hidden p-2" id="warning_len">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-security-important"><path className="fill-[#F86A6A]" d="M4 4l8-2 8 2v9.06a8 8 0 0 1-4.42 7.15L12 22l-3.58-1.79A8 8 0 0 1 4 13.06V4z"></path><path className="fill-[#CF1124]" d="M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 0 1 1-1.1h1a1 1 0 0 1 1 1.1l-.5 5z"></path></svg>
                        <h3 className=" text-[#E12D39] font-bold text-md ">
                            A good password is at least 8 characters long.
                        </h3>
                    </div>

<div className=" col-span-1 col-start-2 bg-[#FF9B9B] border-l-4  border-[#CF1124] hidden p-2" id="warning_repeat">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-close-circle"><circle cx="12" cy="12" r="10" className="fill-[#F86A6A]"></circle><path className="fill-[#CF1124]" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"></path></svg>
                        <h3 className=" text-[#E12D39] font-bold text-md ">
                            The repeated password must be the same as the original password
                        </h3>
                    </div> 
    */
}