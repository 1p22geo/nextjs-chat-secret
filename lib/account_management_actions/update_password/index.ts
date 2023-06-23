"use server";

import { cookies, headers } from "next/headers";
import { createHash } from "crypto";
import { MongoClient } from "mongodb";

import secrets from "@/lib/globals/secrets";
const uri = secrets.database.DB_CONN_STRING;

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME;
const options = globals.database.DB_CLIENT_OPTIONS;

export default async function UpdatePasswordAction(e: FormData) {
	const cookie = cookies().get("skyChatSession");
	if (!cookie) {
		return;
	}
	const id = cookie.value;

	const newPassword = e.get("newPassword");
	if (!newPassword) {
		return;
	}
	const npass = newPassword.toString();
	const repeatPass = e.get("repeatPass");
	if (!repeatPass) {
		return;
	}
	const rpass = repeatPass.toString();

	if(!npass || !rpass || rpass.length < 8 || npass.length < 8 || rpass != npass) return;


	const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

	const salt = genRanHex(12);

	const hash = createHash("sha256")
	.update(npass)
	.update(
		createHash("sha256")
			.update(salt, "utf-8").digest("hex")
	).digest("hex")

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
				salt:salt,
				sha256:hash
            },
		};
        await collection.updateOne(filter, update)

		await client.close();
	} catch {
		await client.close();
	}
}
