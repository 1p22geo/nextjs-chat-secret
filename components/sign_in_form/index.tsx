"use client"

import Dialog from "../warning";
import Link from "next/link";
import { sendForm } from "./sendform";
import { translate } from "@/lang";


export default function SignInForm(props:{lang:string}){
    const dict = translate(props.lang)
    return(
        <form onSubmit={sendForm} className="p-8 bg-[#B2C8F7] max-w-[600px] rounded-3xl shadow-2xl mx-auto flex flex-col items-center gap-4">
                <h1 className=" text-2xl font-semibold">{dict.signup.title}</h1>
                <div className="sm:grid sm:grid-cols-[max-content_auto] flex flex-col items-center text-right gap-2 w-full">
                    <label htmlFor='uname'>{dict.signup.username}</label>
                    <input type="text" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" name="uname" id="uname"></input>
                    
                    <label htmlFor='email'>{dict.signup.email}</label>
                    <input type="email" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" name="email" id="email"></input>
            
                    <label htmlFor='passwd'>{dict.signup.password}</label>
                    <input type="password" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" name="passwd" id="passwd"></input>
                    
                    <label htmlFor='rpass'>{dict.signup.rpass}</label>
                    <input type="password" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" name="rpass" id="rpass"></input>
                </div>
                    <Dialog status="error" icon="error" message={dict.signup.warnings.rpass} id="warning_repeat" />
                    <Dialog status="info" message={dict.signup.warnings.nopick} id="nopass" icon="info" />
                    <Dialog status="error" message={dict.signup.warnings.len} id="warning_len" icon="security" />
                    <Dialog status="warn" icon="error" message={dict.signup.warnings.err[0]} id="warning_data" secondary={dict.signup.warnings.err[1]} />
                    <Dialog status="warn" icon="info" message={dict.signup.warnings.conflict[0]} secondary={dict.signup.warnings.conflict[1]} id="user_conflict"/>
                    <Dialog status="success" icon="tick" message={dict.signup.warnings.ready[0]} id="created" secondary={dict.signup.warnings.ready[1]} >
                        <Link href={'/'+props.lang+'/login'} className="hover:underline font-bold text-[#07600E]">
                        {dict.signup.warnings.ready[2]}
                        </Link>
                    </Dialog>
                    <Dialog status="loading" message={dict.signup.warnings.wait} id="creating"/>
                <input type="submit" value={dict.signup.submit} className="bg-[#F35627] cursor-pointer font-semibold text-white p-2 rounded-md"></input>
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