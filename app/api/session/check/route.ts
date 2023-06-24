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
    try{
    const {searchParams} = new URL(request.url);
    const session = searchParams.get('session');
    if(session === null){
        throw new Error("Session ID required")
    }

    const client = new MongoClient(uri, options);
    try{
			await client.connect();
        const db = client.db(db_name)
        const collection = db.collection('sessions');
        const res = await collection.findOne({"_id":new ObjectId(session)})
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
