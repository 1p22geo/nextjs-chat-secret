import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

import secrets from "@/lib/globals/secrets";
const uri = secrets.database.DB_CONN_STRING;

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME;
const options = globals.database.DB_CLIENT_OPTIONS;

export async function POST(request: NextRequest) {
	try {
		const json = await request.json();
		const session = json.session;
		if (session == null) {
			throw new Error("Session ID required");
		}

		const client = new MongoClient(uri, options);
		try {
			await client.connect();
			const db = client.db(db_name);
			const collection = db.collection("sessions");
			const res = await collection.findOne({ _id: new ObjectId(session) });
			if (res == null) {
				await client.close();
				return NextResponse.json({}, { status: 401 });
			}

			const collection2 = db.collection("users");
			const res2 = await collection2.findOne({ user: res.user });
			if (!res2) {
				await client.close();
				return NextResponse.json(
					{},
					{ status: 404, statusText: "User not found" }
				);
			}
			if (res2.type == "root") {
			} else if (res2.type == "moderator") {
			} else {
				await client.close();
				return NextResponse.json({}, { status: 403 });
			}

			const posts = db.collection("posts");
			await posts.insertOne({
				user: res2.user,
				name: res2.pname,
				added: Date.now(),
				content: json.content,
				feed: "news",
			});
			await client.close();

			return NextResponse.json({}, { status: 201 });
		} catch {
			await client.close();
			return NextResponse.json({}, { status: 500 });
		}
	} catch {
		return NextResponse.json({}, { status: 400 });
	}
}
