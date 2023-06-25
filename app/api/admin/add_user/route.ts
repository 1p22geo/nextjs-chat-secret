import { MongoClient, ObjectId } from "mongodb";
import { createHash } from "crypto";
import { NextRequest, NextResponse } from "next/server";

import secrets from "@/lib/globals/secrets";
const uri = secrets.database.DB_CONN_STRING;

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME;
const options = globals.database.DB_CLIENT_OPTIONS;

export async function POST(request: NextRequest) {
	let json;
	try {
		json = await request.json();
		//console.log(json)
		if (json.passwd !== json.rpass) {
			return NextResponse.json({ added: false }, { status: 401 });
		}
		if (json.passwd.length < 8) {
			return NextResponse.json({ added: false }, { status: 401 });
		}
	} catch {
		return NextResponse.json({ added: false }, { status: 400 });
	}
	const client = new MongoClient(uri, options);
	await client.connect();
	try {
		const db = client.db(db_name);
		const sessions = db.collection("sessions");
		const session = await sessions.findOne({ _id: new ObjectId(json.session) });
		if (!session) {
			// no sessions?
			return NextResponse.json({}, { status: 401 }); // 401 - no valid authentication method, reauthenticate
		}

		const users = db.collection("users");
		const user = await users.findOne({ user: session.user });
		if (!user) {
			// no user?
			return NextResponse.json({}, { status: 401 }); //     alrighty stop f!cking around, this user doesn't exist, but has logged in one day?
			//                                                    actually possible, admin can delete users.
		}
		if (user.type != "root") {
			return NextResponse.json({}, { status: 403 }); //   403 forbidden - user has provided authentication credentials, however this level of authentication
			//                                                  does not authorise them to perform this action.
		}
		const usercount = await users.countDocuments({
			user: json.uname,
		});
		if (usercount !== 0) {
			return NextResponse.json({ added: false }, { status: 409 });
		}

		const genRanHex = (size: number) =>
			[...Array(size)]
				.map(() => Math.floor(Math.random() * 16).toString(16))
				.join("");

		const salt = genRanHex(12);

		const hash = createHash("sha256")
			.update(json.passwd)
			.update(createHash("sha256").update(salt, "utf-8").digest("hex"))
			.digest("hex");

		//console.log(salt);
		//console.log(hash);

		await users.insertOne({
			user: json.uname,
			pname: json.uname,
			sha256: hash,
			salt: salt,
			type: json.type, //selected user priviledges
			added: Date.now(),
		});
	} catch {
		await client.close();
		return NextResponse.json({ added: false }, { status: 500 });
	}

	await client.close();

	return NextResponse.json({ added: true }, { status: 201 });
}
