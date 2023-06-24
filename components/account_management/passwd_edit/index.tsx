"use client";

import { translate } from "@/lang";
import SessionObject from "@/lib/types/session";
import UserObject from "@/lib/types/user";
import Link from "next/link";

const PasswordEditComponent = (props: {
	session: SessionObject;
	user: UserObject;
	lang: string;
}) => {
	const dict = translate(props.lang)
	return (
		<>
			<Link
				href={'/'+props.lang+"/data_modals/password"}
				className="bg-[#F35627] text-base rounded-2xl text-white hover:bg-[#F9703E] p-2"
			>
				{dict.manage.components.pass_edit.button}
			</Link>
		</>
	);
};

export default PasswordEditComponent;
