import { cookies, headers } from "next/headers";
import {  NextResponse } from "next/server";

export function GET(){
    cookies().set({
        name:"skyChatSession",
        value: "",
        path:"/",
        maxAge:-1
    })
    const headersList = headers();
    
    const domain = headersList.get('host');
    return NextResponse.redirect(new URL(`http://${domain}/`))
}