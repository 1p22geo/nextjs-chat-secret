"use client";

import Dialog from "@/components/warning";
import Link from "next/link";
import { useEffect, useState } from "react";

const PublicNicknameEditComponent = (props: { session: string }) => {
	const [resSession, setResSession] = useState(null);
	const [resUser, setResUser] = useState({
		user: null,
		pname: null,
		added: null,
		loading: true,
	});
	useEffect(() => {
		fetch(`/api/session/check?session=${props.session}`).then((res) => {
			if (!res.ok) {
				throw Error("I don't even know.");
			} else {
				res.json().then((json) => {
					setResSession(json.session.user);
				});
			}
		});
	}, [props.session]);

	useEffect(() => {
		if (!resSession) {
			return;
		}
		fetch(`/api/user?session=${props.session}&user=${resSession}`).then(
			(res) => {
				if (!res.ok) {
					throw Error("I don't even know 2.0");
				} else {
					res.json().then((json) => {
						setResUser({ ...json.res, loading: false });
					});
				}
			}
		);
	}, [resSession]);

	if (resUser.loading) {
		return (
			<Dialog status="loading" message="Loading important data..." visible />
		);
	}

	return (
		<>
			<div className="flex flex-col items-start gap-2">
				<div >
					<div className="group text-lg">
						Username: {resUser.user}
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
						Nickname: {resUser.pname}
						<div className=" group-hover:block hidden p-2 text-sm text-slate-500 absolute w-fit h-fit bg-white shadow-2xl ml-8">
							Your public nickname. It's the main identifier by which others see
							you, but it doesn't have to be unique.
							<br />
							You can change it anytime you want.
						</div>
					</div>
				</div>
				<Link href="/data_modals/nickname" className="bg-[#F35627] rounded-2xl text-white hover:bg-[#F9703E] p-2">
					Change nickname
				</Link>
			</div>
		</>
	);
};

export default PublicNicknameEditComponent;
