import { MongoClient, ServerApiVersion } from "mongodb";
import { translate } from "@/lang";

import secrets from "@/lib/globals/secrets";
const uri = secrets.database.DB_CONN_STRING;

import globals from "@/lib/globals";
import createDeleteUserAction from "@/lib/admin/actions/delete_user";
import CustomButton from "@/lib/admin/util/button";
import Dialog from "@/components/warning";
import Link from "next/link";
import AddUserModalButton from "@/lib/admin/util/add_user_link";
const db_name = globals.database.DB_NAME;
const options = globals.database.DB_CLIENT_OPTIONS;

const UserManagementPage = async ({ params }: { params: { lang: string } }) => {
	const dict = translate(params.lang);
	const client = new MongoClient(uri, options);
	const db = client.db(db_name);
	const collection = db.collection("users");

	const users = await collection.find({}).toArray();

	await client.close();

	return (
		<div className="flex flex-col gap-4 items-start">
			<div className="p-8 w-fit">
				<Dialog
					status="loading"
					message={dict.admin.users.deleting}
					id="deleting"
				/>
				<Dialog
					status="loading"
					message={dict.admin.users.wait}
					id="wait_loading"
				/>
			</div>
			<h3 className="font-semibold">{dict.admin.users.title}</h3>
			<AddUserModalButton lang={params.lang} text={dict.admin.users.modals.add.button} />
			<div className="grid grid-cols-5 shadow-2xl">
				<div className="pr-4 p-2 text-left bg-[#647ACB]">
					{dict.admin.users.table.headings[0]}
				</div>
				<div className="pr-4 p-2 text-left bg-[#647ACB]">
					{dict.admin.users.table.headings[1]}
				</div>
				<div className="pr-4 p-2 text-left bg-[#647ACB]">
					{dict.admin.users.table.headings[2]}
				</div>
				<div className="pr-4 p-2 text-left bg-[#647ACB]">
					{dict.admin.users.table.headings[3]}
				</div>
				<div className="pr-4 p-2 pl-2 text-left bg-[#647ACB]">
					{dict.admin.users.table.headings[4]}
				</div>
				{users.map((user, index) => {
					return (
						<>
							<div className={"grid items-center p-2 "+(index%2==0?'bg-[#BED0F7]':'bg-[#7B93DB]')}><span>{user.type}</span></div>
							<div className={"grid items-center p-2 "+(index%2==0?'bg-[#BED0F7]':'bg-[#7B93DB]')}><span>{user.user}</span></div>
							<div className={"grid items-center p-2 "+(index%2==0?'bg-[#BED0F7]':'bg-[#7B93DB]')}><span>{user.pname}</span></div>
							<div className={"grid items-center p-2 "+(index%2==0?'bg-[#BED0F7]':'bg-[#7B93DB]')}><span>{new Date(user.added).toLocaleString()}</span></div>
							<div className={(index%2==0?'bg-[#BED0F7]':'bg-[#7B93DB]')}>
								<div className={"flex m-2 flex-nowrap "}>
									<form
										action={createDeleteUserAction(
											user._id.toHexString(),
											params.lang
										)}
									>
										<CustomButton value={dict.admin.users.table.actions[0]} />
									</form>
								</div>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default UserManagementPage;
