"use client";

import Dialog from "@/components/warning";
import UpdatePasswordAction from "@/lib/account_management_actions/update_password";
import submitHandler from './func'
import { translate } from "@/lang";

const PasswordEditForm = ({lang}:{lang:string}) => {
	const dict = translate(lang)
	return (
		<>
			<div className="w-fit mx-auto p-8 bg-[#B2C8F7] rounded-3xl flex flex-col items-center gap-4 shadow-2xl">
				<h1 className="text-lg">{dict.manage.components.modals.passwd_edit.title}</h1>
				<form
					action={UpdatePasswordAction}
					onSubmit={()=>submitHandler(lang)}
					className="flex flex-col items-center gap-4"
				>
					<div className="sm:grid sm:grid-cols-[max-content_auto] flex flex-col items-center text-right gap-2 w-full">
						<label htmlFor="newPassword">{dict.manage.components.modals.passwd_edit.pass_prompt}</label>
						<input
							type="password"
							className="ml-2 outline outline-2 text-left outline-slate-800 p-1"
							autoFocus
							name="newPassword"
							id="newPassword"
						></input>
						<label htmlFor="repeatPass">{dict.manage.components.modals.passwd_edit.rpass_prompt}</label>
						<input
							type="password"
							className="ml-2 outline outline-2 text-left outline-slate-800 p-1"
							name="repeatPass"
							id="repeatPass"
						></input>
					</div>
					<Dialog
						status="error"
						icon="error"
						message="The repeated password must be the same as the original password"
						id="warning_repeat"
					/>
					<Dialog
						status="error"
						message="A good password is at least 8 characters long."
						id="warning_len"
						icon="security"
					/>
					<Dialog
						status="info"
						message="You need to give a password"
						id="nopass"
						icon="security"
					/>

					<input
						type="submit"
						value={dict.manage.components.modals.passwd_edit.submit}
						className="bg-[#F35627] cursor-pointer rounded-full w-fit text-white hover:bg-[#F9703E] p-2"
					/>
				</form>
			</div>
		</>
	);
};

export default PasswordEditForm;
