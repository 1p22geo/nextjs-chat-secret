import { MongoClient, ServerApiVersion } from "mongodb";
import {  NextResponse } from "next/server";

import secrets from "@/lib/globals/secrets"
const uri = secrets.database.DB_CONN_STRING

import globals from "@/lib/globals";
const db_name = globals.database.DB_NAME
const options = globals.database.DB_CLIENT_OPTIONS

export async function GET(){
    console.log("Clearing ENTIRE database")
    try{
        
		const client = new MongoClient(uri, options);
        await client.connect();
		const db = client.db(db_name);
        let coll = db.collection("sessions");
        coll.deleteMany({})
        coll = db.collection("posts");
        coll.deleteMany({})
        coll = db.collection("users");
        coll.deleteMany({})
        coll = db.collection("messages");
        coll.deleteMany({})

        return NextResponse.json({deleted:true}, { status: 200 });
    }
    catch{
		return NextResponse.json({deleted:false}, { status: 400 });
    }
}