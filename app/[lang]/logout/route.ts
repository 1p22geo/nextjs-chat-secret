import { cookies, headers } from "next/headers";
import {  NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest, { params }: { params: { lang: string } }){
    cookies().set({
        name:"skyChatSession",
        value: "",
        path:"/",
        maxAge:-1
    })
    return NextResponse.redirect(`https://192.168.50.156/${params.lang}`) // REPLACE THIS IN PRODUCTION
}