import { FormEvent } from "react";
import {hideAll} from './funcs'

export async function sendForm(e:FormEvent){
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
    hideAll()
    if(!uname || !passwd){
        document.querySelector("#nopass")?.classList.remove("hidden")
        document.querySelector("#nopass")?.classList.add("flex")
        return

    }
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