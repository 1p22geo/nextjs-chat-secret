import { cookies, headers } from "next/headers";
import {  NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest, { params }: { params: { lang: string } }){
    cookies().set({
        name:"skyChatSession",
        value: "",
        path:"/",
        maxAge:-1
    })
    const host = headers().get('host')
    return NextResponse.redirect(`https://${host}/${params.lang}`)
}