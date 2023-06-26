import UserObject from "@/lib/types/user"
import { redirect } from "next/navigation"

export default async function checkUser(domain:string|null, session:string, user:string){
    const url = new URL(`http://${domain}/api/user`)
    url.searchParams.set('session', session)
    url.searchParams.set('user', user) // URL ENCODED QUERY DEBILU JEDEN
    // console.log(url)
    
    const res = await fetch(url, { next:{revalidate:0}})
   //console.log(res.status)
    if(!res.ok){
        redirect('/')
    }
    const json:{res:UserObject} = await res.json()
    return {url, res, json}
}