import SessionObject from "@/lib/types/session";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function checkSessionCookie(){
    const cookie = cookies().get("skyChatSession");
	if (!cookie) {
		redirect("/");
	}
	const id = cookie.value;

    const headersList = headers();
    
    const domain = headersList.get('host');
    ////console.log(domain)
    const url = new URL(`http://${domain}/api/session/check?session=${id}`)
    // console.log(url)
    
    const res = await fetch(url, { next:{revalidate:0}})
   //console.log(res.status)
    if(!res.ok){
        redirect('/')
    }
    const json:{
        session:SessionObject
    } = await res.json()
    return {json:json, domain:domain, res:res, id:id}
}