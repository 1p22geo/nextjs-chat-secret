"use server";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

import secrets from "@/lib/globals/secrets";
const uri = secrets.database.DB_CONN_STRING;

import globals from "@/lib/globals";
import { revalidatePath } from "next/cache";
const db_name = globals.database.DB_NAME;
const options = globals.database.DB_CLIENT_OPTIONS;

export default async function _deleteUser(e:FormData, user_id:string, lang:string){
    "use server"
    const client = new MongoClient(uri, options);
	const db = client.db(db_name);
	const collection = db.collection("users");

    console.log("Deleting user ", user_id)
    console.log(await collection.deleteOne({_id:new ObjectId(user_id), user:{$ne:'root'}}))
    revalidatePath('/in/'+lang+'/admin/')
    await client.close()

}