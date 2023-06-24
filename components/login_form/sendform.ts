import { FormEvent } from "react"
import { errOut, hideAll, validateUnamePass } from "./funcs";

export async function sendForm(e:FormEvent, lang:string){
    e.preventDefault()
    hideAll()
    const target = e.target as typeof e.target & {
        uname:{value:string},
        passwd:{value:string},
    }
    const uname = target.uname.value;
    const passwd = target.passwd.value;
    if(validateUnamePass(uname, passwd)){
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
        errOut()
        return
    }
    if(!res.ok){
        errOut()
        return
    }
    window.location.href = "/"+lang+'/in'
}