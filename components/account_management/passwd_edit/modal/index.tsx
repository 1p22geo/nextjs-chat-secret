"use client";

import Dialog from "@/components/warning";
import UpdatePasswordAction from "@/lib/account_management_actions/update_password";

const PasswordEditForm = () => {
	return (
		<>
			<div className="w-fit mx-auto p-8 bg-[#B2C8F7] rounded-3xl flex flex-col items-center gap-4 shadow-2xl">
				<h1 className="text-lg">Change password</h1>
				<form
					action={UpdatePasswordAction}
					onSubmit={() => {
						document.querySelector("#warning_repeat")?.classList.remove("flex");
						document.querySelector("#warning_repeat")?.classList.add("hidden");
						document.querySelector("#warning_len")?.classList.remove("flex");
						document.querySelector("#warning_len")?.classList.add("hidden");
						document.querySelector("#nopass")?.classList.remove("flex");
						document.querySelector("#nopass")?.classList.add("hidden");
						const elem1 = document.querySelector(
							"#newPassword"
						) as HTMLInputElement;
						const elem2 = document.querySelector(
							"#repeatPass"
						) as HTMLInputElement;
						if (
							elem1 &&
							elem2 &&
							elem1.value &&
							elem2.value &&
							elem1.value == elem2.value &&
							elem1.value.length >= 8 &&
							elem2.value.length >= 8
						)
							window.location.replace("/in/manage");
						else {
							if (!(elem1.value && elem2.value)) {
								document.querySelector("#nopass")?.classList.add("flex");
								document.querySelector("#nopass")?.classList.remove("hidden");
								return;
							}
							if (!(elem1.value == elem2.value)) {
								document
									.querySelector("#warning_repeat")
									?.classList.add("flex");
								document
									.querySelector("#warning_repeat")
									?.classList.remove("hidden");
								return;
							}
							if (!(elem1.value.length >= 8 && elem2.value.length >= 8)) {
								document.querySelector("#warning_len")?.classList.add("flex");
								document
									.querySelector("#warning_len")
									?.classList.remove("hidden");
								return;
							}
						}
					}}
					className="flex flex-col items-center gap-4"
				>
					<div className="sm:grid sm:grid-cols-[max-content_auto] flex flex-col items-center text-right gap-2 w-full">
						<label htmlFor="newPassword">New password:</label>
						<input
							type="password"
							className="ml-2 outline outline-2 text-left outline-slate-800 p-1"
							autoFocus
							name="newPassword"
							id="newPassword"
						></input>
						<label htmlFor="repeatPass">Repeat password:</label>
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
						value="Update"
						className="bg-[#F35627] cursor-pointer rounded-full w-fit text-white hover:bg-[#F9703E] p-2"
					/>
				</form>
			</div>
		</>
	);
};

export default PasswordEditForm;
