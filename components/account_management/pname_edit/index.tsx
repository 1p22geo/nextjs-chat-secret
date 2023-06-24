"use client";

import Dialog from "@/components/warning";
import SessionObject from "@/lib/types/session";
import UserObject from "@/lib/types/user";
import Link from "next/link";
import { useEffect, useState } from "react";

const PublicNicknameEditComponent = (props: {
	lang: string;
	session: SessionObject;
	user: UserObject;
}) => {
	return (
		<>
			<div className="flex flex-col items-start gap-2">
				<div>
					<div className="group text-lg">
						Username: {props.user.user}
						<div className=" group-hover:block hidden p-2 text-sm text-slate-500 absolute w-fit h-fit bg-white shadow-2xl ml-8">
							Your unique identifier. It cannot be changed and has to be unique
							among all users.
							<br />
							It can be seen as a small grey text under your messages.
						</div>
					</div>
				</div>
				<div>
					<div className=" group text-lg">
						Nickname: {props.user.pname}
						<div className=" group-hover:block hidden p-2 text-sm text-slate-500 absolute w-fit h-fit bg-white shadow-2xl ml-8">
							Your public nickname. It's the main identifier by which others see
							you, but it doesn't have to be unique.
							<br />
							You can change it anytime you want.
						</div>
					</div>
				</div>
				<div>
					<Link
						href={'/'+props.lang+"/data_modals/nickname"}
						className="bg-[#F35627] text-base rounded-full text-white hover:bg-[#F9703E] p-2"
					>
						Change nickname
					</Link>
				</div>
			</div>
		</>
	);
};

export default PublicNicknameEditComponent;
