"use server"
import { MongoClient, ServerApiVersion } from "mongodb";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

import secrets from "@/lib/globals/secrets"
const uri = secrets.database.DB_CONN_STRING

import globals from "@/lib/globals";

const db_name = globals.database.DB_NAME
const options = globals.database.DB_CLIENT_OPTIONS

export async function SubmitMessage(d:FormData){

   //console.log(d.get("msg"))
    const id = (cookies().get("skyChatSession")?.value)
    const headersList = headers();

    const domain = headersList.get('host');
    ////console.log(domain)
    const url = new URL(`http://${domain}/api/session/check?session=${id}`)
    ////console.log(url)
    
    const res = await fetch(url, { next:{revalidate:false}})
    const json = await res.json()
   //console.log(json.session.user)
   const client = new MongoClient(uri, options);
    try{
			await client.connect();
        const db = client.db(db_name)
        const collection = db.collection("posts")
        await collection.insertOne(
            {
                user: json.session.user,
                feed: "public",
                content: d.get("msg")?.toString(),
                added: Math.floor(Date.now() )
              }
        )
    }
    catch{
        await client.close()
    }
    // console.log("Submitted message!")
    redirect("/in/public")
}