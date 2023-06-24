import { cookies, headers } from "next/headers";
import {  NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest, { params }: { params: { lang: string } }){
    cookies().set({
        name:"skyChatSession",
        value: "",
        path:"/",
        maxAge:-1
    })
    const headersList = headers();

    
    
    const domain = headersList.get('host');
    return NextResponse.redirect(new URL(`http://${domain}/${params.lang}`))
}