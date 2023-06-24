"use client";

import Dialog from "@/components/warning";
import { translate } from "@/lang";
import SessionObject from "@/lib/types/session";
import UserObject from "@/lib/types/user";
import Link from "next/link";
import { useEffect, useState } from "react";

const PublicNicknameEditComponent = (props: {
	lang: string;
	session: SessionObject;
	user: UserObject;
}) => {
	const dict = translate(props.lang);
	return (
		<>
			<div className="flex flex-col items-start gap-2">
				<div>
					<div className="group text-lg">
						{dict.manage.components.pname_edit.uname.label} {props.user.user}
						<div className=" group-hover:block hidden p-2 text-sm text-slate-500 absolute w-fit h-fit bg-white shadow-2xl ml-8">
							{dict.manage.components.pname_edit.uname.tooltip}
						</div>
					</div>
				</div>
				<div>
					<div className=" group text-lg">
						{dict.manage.components.pname_edit.pname.label} {props.user.pname}
						<div className=" group-hover:block hidden p-2 text-sm text-slate-500 absolute w-fit h-fit bg-white shadow-2xl ml-8">
							{dict.manage.components.pname_edit.pname.tooltip}
						</div>
					</div>
				</div>
				<div>
					<Link
						href={"/" + props.lang + "/data_modals/nickname"}
						className="bg-[#F35627] text-base rounded-full text-white hover:bg-[#F9703E] p-2"
					>
						{dict.manage.components.pname_edit.button}
					</Link>
				</div>
			</div>
		</>
	);
};

export default PublicNicknameEditComponent;
