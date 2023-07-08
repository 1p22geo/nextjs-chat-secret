export const revalidate = false
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

import secrets from "@/lib/globals/secrets"
const uri = secrets.database.DB_CONN_STRING

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME
const options = globals.database.DB_CLIENT_OPTIONS

export async function POST(request:NextRequest){
    console.log("Recieved request")
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
    console.log("Connected to database")
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
            let id = new Date(Date.now())
            const res = await collection2.insertOne({
                _id: id as any as ObjectId,
                user:user.user,
                added:Date.now() ,
            })
            
            
            const response = NextResponse.json({session:id.getTime().toString()}, {status:201});

            cookies().set({
                name:"skyChatSession",
                value: id.getTime().toString(),
                path:"/",
                httpOnly:true,
                secure:false,
                sameSite:"strict",
                expires:Date.now() + 86_400_000 //one day expires
            })
            return response
        }
    }
    catch{
        await client.close()
        return NextResponse.json({}, {status:500});

    }


}