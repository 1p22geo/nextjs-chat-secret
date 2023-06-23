export const revalidate = false
import { MongoClient, ServerApiVersion } from "mongodb";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

import secrets from "@/lib/globals/secrets"
const uri = secrets.database.DB_CONN_STRING

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME
const options = globals.database.DB_CLIENT_OPTIONS

export async function POST(request:NextRequest){
    let json;
    try{
        json = await request.json()
    }
    catch{
        return NextResponse.json({}, {status:400});
    }
    ////console.log(json)
    const client = new MongoClient(uri, options);
    await client.connect();
    try{
        const db = client.db(db_name)
        const collection = db.collection('users')
        let user = await collection.findOne({user:json.uname})
        if(!user){
            return NextResponse.json({}, {status:401});

        }
        const salt = user.salt

        const hash = createHash("sha256")
        .update(json.passwd)
        .update(
            createHash("sha256")
                .update(salt, "utf-8").digest("hex")
        ).digest("hex")

       //console.log(salt);        
       //console.log(hash);

        user = await collection.findOne({
            user:json.uname,
            sha256:hash,
            salt:salt
        })
        if(!user){
            return NextResponse.json({}, {status:401});

        }
        else{
            const collection2 = db.collection('sessions');
            const res = await collection2.insertOne({
                user:user.user,
                added:Date.now() ,
                address:request.ip
            })
            const session = (res.insertedId.toJSON())
            
            const response = NextResponse.json({session:session}, {status:201});

            cookies().set({
                name:"skyChatSession",
                value: session,
                path:"/",
                httpOnly:true,
                secure:false,
                sameSite:"strict"
            })
            return response
        }
    }
    catch{
        await client.close()
        return NextResponse.json({}, {status:500});

    }


}