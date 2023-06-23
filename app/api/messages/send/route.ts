import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { NextRequest, NextResponse } from "next/server";


import secrets from "@/lib/globals/secrets"
const uri = secrets.database.DB_CONN_STRING

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME
const options = globals.database.DB_CLIENT_OPTIONS

export async function POST(request:NextRequest){
	try {
		const json = await request.json()
		const session = json.session
		//console.logg(session)
		if (session == null) {
			throw new Error("Session ID required");
		}

		try {
			const client = new MongoClient(uri, options);
			await client.connect();
			// console.log(`${req_id} : database connected`)
			// console.timeLog(req_id)
			const db = client.db(db_name);
			const collection = db.collection("sessions");
			// console.log(`${req_id} : Collection found, finding session`)
			// console.timeLog(req_id)
			const res = await collection.findOne({ _id: new ObjectId(session) });
			// console.log(`${req_id} : Document retrieved`)
			// console.timeLog(req_id)
			// console.log(res);
			if (res == null) {
				// console.log(`${req_id} : user session NOT found`)
				// console.timeEnd(req_id)
				await client.close();
				return NextResponse.json({}, { status: 403 });
			}
			else{

				const collection2 = db.collection("posts")
				await collection2.insertOne({
					user:res.user,
					added:Date.now(),
					content:json.content,
					feed:"public",
					address:request.ip
				})

				return NextResponse.json({}, {status:201})

			}
		}
		catch{
			return NextResponse.json({}, { status: 500 });
			
		}
	}
	catch{
		return NextResponse.json({}, { status: 400 });

	}
}