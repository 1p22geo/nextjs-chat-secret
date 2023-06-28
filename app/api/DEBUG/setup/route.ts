export const revalidate = 0;
import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";

import secrets from "@/lib/globals/secrets";
const uri = secrets.database.DB_CONN_STRING;
const root_pass = secrets.application.ROOT_PASS

import globals from "@/lib/globals";
import { createHash } from "crypto";
const db_name = globals.database.DB_NAME;
const options = globals.database.DB_CLIENT_OPTIONS;
export async function GET() {
	console.log("Clearing ENTIRE database");
	const client = new MongoClient(uri, options);
	try {
		await client.connect();
		const db = client.db(db_name);
		let coll = db.collection("sessions");
		console.log(await coll.deleteMany({}));
		coll = db.collection("posts");
		console.log(await coll.deleteMany({}));
		coll = db.collection("users");
		console.log(await coll.deleteMany({}));
		coll = db.collection("messages");
		console.log(await coll.deleteMany({}));

    coll = db.collection("users")

    const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    const salt = genRanHex(12);

    const hash = createHash("sha256")
    .update(root_pass)
    .update(
        createHash("sha256")
            .update(salt, "utf-8").digest("hex")
    ).digest("hex")


   //console.log(salt);        
   //console.log(hash);

    await coll.insertOne({
        user:"root",
        pname:"root",
        sha256:hash,
        salt:salt,
        type:"root", //super user priviledges
        added: Date.now() ,
    }) // IPs were never a good idea


		await client.close();
		return NextResponse.json({ done: true }, { status: 200 });
	} catch {
		await client.close();
		return NextResponse.json({ done: false }, { status: 400 });
	}
}
