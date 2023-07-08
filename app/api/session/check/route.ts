import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

export const revalidate = false
import secrets from "@/lib/globals/secrets"
const uri = secrets.database.DB_CONN_STRING
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
import globals from "@/lib/globals";
const db_name = globals.database.DB_NAME
const options = globals.database.DB_CLIENT_OPTIONS


export async function GET(request:Request){
    const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    const reqID = genRanHex(8)
    console.log(reqID, "api/session/check/route - request recieved")
    try{
    const {searchParams} = new URL(request.url);
    const session = parseInt(searchParams.get('session') as string);

    console.log(reqID, "Session:" ,session)
    if(session === null){
        throw new Error("Session ID required")
    }

    const client = new MongoClient(uri, options);
    try{
			await client.connect();
            console.log(reqID, " - database connected")
        const db = client.db(db_name)
        const collection = db.collection('sessions');
        const date = new Date(session)
        console.log(reqID, date)
        const res = await collection.findOne({"_id":date})
        console.log(reqID, res)
        await client.close()
        if(!res){
            return NextResponse.json({}, {status:404})
        }
        else{
            return NextResponse.json({session:res}, {status:200})
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
