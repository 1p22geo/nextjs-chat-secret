import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";


import secrets from "@/lib/globals/secrets"
const uri = secrets.database.DB_CONN_STRING
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
import globals from "@/lib/globals";
const db_name = globals.database.DB_NAME
const options = globals.database.DB_CLIENT_OPTIONS


export async function GET(request:Request){
    try{
    const {searchParams} = new URL(request.url);
    const uname = searchParams.get('user');
    if(uname === null){
        throw new Error("Username required")
    }
    const session = searchParams.get('session');
    if(session === null){
        throw new Error("Session required")
    }
    

    const client = new MongoClient(uri, options);
    try{
			await client.connect();
        const db = client.db(db_name)
        const collection2 = db.collection('sessions')
        const res2 = await collection2.findOne({"_id":new ObjectId(session)})
        if(!res2){
            await client.close()
            return NextResponse.json({}, {status:401})
        }
        
        const collection = db.collection('users');
        const res = await collection.findOne({user:uname})
        await client.close()
        if(!res){
            return NextResponse.json({}, {status:404, statusText:"User not found"})
        }
        else{
            return NextResponse.json({res:{
                user:res.user,
                pname:res.pname,
                added:res.added,
                type:res.type
            }}, {status:200})
        }
    }
    catch{
        await client.close();
        return NextResponse.json({}, {status:500})
    }
    }
    catch{
        return NextResponse.json({}, {status:400})
    }
}
