"use client";
import "client-only";
import Dialog from "@/components/warning";
import { translate } from "@/lang";
import { useRouter } from "next/navigation";
import { createSendForm } from "./createSendForm";
import { useEffect } from "react";

const AdminAddUserForm = (props: { lang: string; session: string }) => {
	"use client";
	useEffect(() => {
		document.querySelector("#wait_loading")?.classList.remove("flex");
		document.querySelector("#wait_loading")?.classList.add("hidden");
	}, []);
	const dict = translate(props.lang);
	const router = useRouter();
	return (
		<form
			onSubmit={createSendForm(router, props.session)}
			className="w-fit p-8 bg-[#B2C8F7] rounded-3xl flex flex-col mx-auto items-center gap-4 shadow-2xl"
		>
			<h1 className=" text-2xl font-semibold">
				{dict.admin.users.modals.add.title}
			</h1>
			<div className="sm:grid sm:grid-cols-[max-content_auto] flex flex-col items-center text-right gap-2 w-full">
				<label htmlFor="uname">
					{dict.admin.users.modals.add.prompts.username}
				</label>
				<input
					type="text"
					className="ml-2 outline outline-2 text-left outline-slate-800 p-1"
					name="uname"
					id="uname"
				></input>

				<label htmlFor="email">
					{dict.admin.users.modals.add.prompts.email}
				</label>
				<input
					type="email"
					className="ml-2 outline outline-2 text-left outline-slate-800 p-1"
					name="email"
					id="email"
				></input>

				<label htmlFor="passwd">
					{dict.admin.users.modals.add.prompts.password}
				</label>
				<input
					type="password"
					className="ml-2 outline outline-2 text-left outline-slate-800 p-1"
					name="passwd"
					id="passwd"
				></input>

				<label htmlFor="rpass">
					{dict.admin.users.modals.add.prompts.rpass}
				</label>
				<input
					type="password"
					className="ml-2 outline outline-2 text-left outline-slate-800 p-1"
					name="rpass"
					id="rpass"
				></input>
				<label htmlFor="type">
					{dict.admin.users.modals.add.prompts.type.title}
				</label>
				<select
					id="type"
					name="type"
					className="bg-white ml-2 outline outline-2 text-left outline-slate-800 p-1"
				>
					<option value="user">
						{dict.admin.users.modals.add.prompts.type.options[0]}
					</option>
					<option value="moderator">
						{dict.admin.users.modals.add.prompts.type.options[1]}
					</option>
					<option value="root">
						{dict.admin.users.modals.add.prompts.type.options[2]}
					</option>
				</select>
			</div>
			<Dialog
				status="error"
				icon="error"
				message={dict.admin.users.modals.add.warnings.rpass}
				id="warning_repeat"
			/>
			<Dialog
				status="info"
				message={dict.admin.users.modals.add.warnings.nopick}
				id="nopass"
				icon="info"
			/>
			<Dialog
				status="error"
				message={dict.admin.users.modals.add.warnings.len}
				id="warning_len"
				icon="security"
			/>
			<Dialog
				status="warn"
				icon="error"
				message={dict.admin.users.modals.add.warnings.err[0]}
				id="warning_data"
				secondary={dict.admin.users.modals.add.warnings.err[1]}
			/>
			<Dialog
				status="warn"
				icon="info"
				message={dict.admin.users.modals.add.warnings.conflict[0]}
				secondary={dict.admin.users.modals.add.warnings.conflict[1]}
				id="user_conflict"
			/>
			<Dialog
				status="success"
				icon="tick"
				message={dict.admin.users.modals.add.warnings.ready}
				id="created"
			></Dialog>
			<Dialog
				status="loading"
				message={dict.admin.users.modals.add.warnings.wait}
				id="creating"
			/>
			<input
				type="submit"
				value={dict.admin.users.modals.add.submit}
				className="bg-[#F35627] cursor-pointer font-semibold text-white p-2 rounded-md"
			></input>
		</form>
	);
};

export default AdminAddUserForm;
