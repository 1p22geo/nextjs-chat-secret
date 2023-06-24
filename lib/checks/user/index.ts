import { redirect } from "next/navigation"

export default async function checkUser(domain:string|null, session:string, user:string){
    const url = new URL(`http://${domain}/api/user?session=${session}&user=${user}`)
    // console.log(url)
    
    const res = await fetch(url, { next:{revalidate:0}})
   //console.log(res.status)
    if(!res.ok){
        redirect('/')
    }
    const json = await res.json()
    return {url, res, json}
}