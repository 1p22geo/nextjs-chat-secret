import { cookies, headers } from "next/headers";
import {  NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest, { params }: { params: { lang: string } }){
    cookies().set({
        name:"skyChatSession",
        value: "",
        path:"/",
        maxAge:-1
    })
    const host = headers().get('x-original-host')
    // return NextResponse.redirect(`https://${host}/${params.lang}`)  // REPLACE THIS IN PRODUCTION
    return NextResponse.redirect(`https://6.tcp.eu.ngrok.io:14642/${params.lang}`)  // REPLACE THIS IN PRODUCTION
                                                                    // ok done.
}