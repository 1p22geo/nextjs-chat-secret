"use client";

import SessionObject from "@/lib/types/session";
import UserObject from "@/lib/types/user";
import Link from "next/link";

const PasswordEditComponent = (props: {
	session: SessionObject;
	user: UserObject;
}) => {
	return (
		<>
			<Link
				href="/data_modals/password"
				className="bg-[#F35627] text-base rounded-2xl text-white hover:bg-[#F9703E] p-2"
			>
				Change password
			</Link>
		</>
	);
};

export default PasswordEditComponent;
