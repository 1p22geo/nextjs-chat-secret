import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

import secrets from "@/lib/globals/secrets"
const uri = secrets.database.DB_CONN_STRING

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME
const options = globals.database.DB_CLIENT_OPTIONS


export async function GET(request: NextRequest) {
	// const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
	
    // const req_id = genRanHex(6);
	// console.log(`${req_id} : request recieved`)
	// console.time(req_id)
	try {
		const { searchParams } = new URL(request.url);
		const session = searchParams.get("session");
		//console.logg(session)
		if (session == null) {
			throw new Error("Session ID required");
		}
		const num = searchParams.get("n")
		let messagesCount;
		try{
			if(!num){
				throw Error()
			}
			messagesCount = parseInt(num)
		}
		catch{
			messagesCount = 3
		}		

		const client = new MongoClient(uri, options);
		try {
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
			} else {
				// console.log(`${req_id} : user session found`)
				// console.timeLog(req_id)
				// fetch some messages
				const collection2 = db.collection("posts");
				const agg = [
					{
						$sort: {
							added: -1,
						},
					},
					{
						$limit: messagesCount,
					},
				];

				const cursor = collection2.aggregate(agg);
				const result = await cursor.toArray();
				// console.log(`${req_id} : messages retrieved from database`)
				// console.timeLog(req_id)
				// console.log(result);
				await client.close();
				// console.log(`${req_id} : database disconnected`)
				// console.timeLog(req_id)
				const response = NextResponse.json({ res: result }, { status: 200 });
				// console.log(`${req_id} : returning response`)
				// console.timeEnd(req_id)
				return response
			}
		} catch {
			await client.close();
			// console.log(`${req_id} : exception caught`)
			// console.log(e)
			// console.timeEnd(req_id)
			return NextResponse.json({}, { status: 500 });
		}
	} catch {
		return NextResponse.json({}, { status: 400 });
	}
}
