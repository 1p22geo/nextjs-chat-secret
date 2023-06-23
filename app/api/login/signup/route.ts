import { createHash } from "crypto";
import { MongoClient, ServerApiVersion } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

import secrets from "@/lib/globals/secrets"
const uri = secrets.database.DB_CONN_STRING

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME
const options = globals.database.DB_CLIENT_OPTIONS


export async function POST(request:NextRequest){
    let json;
    try{
        json = await request.json()
       //console.log(json)
        if(json.passwd !== json.rpass){
            return NextResponse.json({added:false}, {status:401});
        }
        if(json.passwd.length < 8){
            return NextResponse.json({added:false}, {status:401});
        }
    }
    catch{
        return NextResponse.json({added:false}, {status:400});
    }
    const client = new MongoClient(uri, options);
    await client.connect();
    try{
        const db = client.db(db_name);
        const users = db.collection('users');
        const usercount = await users.countDocuments({
            user:json.uname
        })
        if(usercount !== 0){
            return NextResponse.json({added:false}, {status:409});
        }

        const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

        const salt = genRanHex(12);

        const hash = createHash("sha256")
        .update(json.passwd)
        .update(
            createHash("sha256")
                .update(salt, "utf-8").digest("hex")
        ).digest("hex")


       //console.log(salt);        
       //console.log(hash);

        await users.insertOne({
            user:json.uname,
            pname:json.uname,
            sha256:hash,
            salt:salt,
            added: Date.now() , // unix timestamp in ms,
            address:request.ip
        })

    }
    catch{
        await client.close()
        return NextResponse.json({added:false}, {status:500});
    }

    await client.close()
    
    
    return NextResponse.json({added:true}, {status:201});
}