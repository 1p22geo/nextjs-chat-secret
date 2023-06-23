import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    let json;
    try{
        json = await request.json()
    }
    catch{
        return NextResponse.json({}, {status:400});
    }
    const name:string = json.name
    const value:string = json.value
    if(!name){
        return NextResponse.json({}, {status:400});
        
    }
    
    const res = NextResponse.json({}, {status:201});

    switch (name) {
        case "msg_num":
            cookies().set({
                name:"skyChatConfig.MaxMessageNum",
                value:value,
                path:"/",
                httpOnly:true,
                secure:false,
                sameSite:"strict"
            });
            break;
        case "lang":
            cookies().set({
                name:"skyChatConfig.LocaleLang",
                value:value,
                path:"/",
                httpOnly:true,
                secure:false,
                sameSite:"strict"
            });
            break;
        case "theme":
            cookies().set({
                name:"skyChatTheme",
                value:value,
                path:"/",
                httpOnly:true,
                secure:false,
                sameSite:"strict"
            });
            break;
    
        default:
            break;
    }

    return res
}