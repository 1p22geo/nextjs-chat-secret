"use server";

import { cookies, headers } from "next/headers";
import { MongoClient } from "mongodb";

import secrets from "@/lib/globals/secrets";
const uri = secrets.database.DB_CONN_STRING;

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME;
const options = globals.database.DB_CLIENT_OPTIONS;

export default async function UpdateNicknameAction(e: FormData) {
	const cookie = cookies().get("skyChatSession");
	if (!cookie) {
		return;
	}
	const id = cookie.value;

	const newNickname = e.get("newNickname");
	if (!newNickname) {
		return;
	}
	const pname = newNickname.toString();

	const headersList = headers();

	const domain = headersList.get("host");
	////console.log(domain)
	const url = new URL(`http://${domain}/api/session/check?session=${id}`);
	// console.log(url)

	const res = await fetch(url, { next: { revalidate: false } });
	//console.log(res.status)
	if (!res.ok) {
		return;
	}
	const json = await res.json();
	console.log(pname);

	console.log(json.session.user);
	const client = new MongoClient(uri, options);
	try {
		await client.connect();
		const db = client.db(db_name);
		const collection = db.collection("users");

		const filter = {
			user: json.session.user,
		};
		const update = {
			$set: {
                pname:pname
            },
		};
        await collection.updateOne(filter, update)

		await client.close();
	} catch {
		await client.close();
	}
}
