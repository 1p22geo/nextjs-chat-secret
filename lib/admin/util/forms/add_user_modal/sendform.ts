"use client";
import { FormEvent } from "react";
import { hideAll } from "./funcs";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";


export async function sendForm(
	e: FormEvent,
	router: AppRouterInstance,
	session: string
) {
	"use client";
	e.preventDefault();
	const target = e.target as typeof e.target & {
		uname: { value: string };
		email: { value: string };
		passwd: { value: string };
		rpass: { value: string };
		type: { value: string };
	};
	const email = target.email.value;
	const uname = target.uname.value;
	const passwd = target.passwd.value;
	const rpass = target.rpass.value;
	const type = target.type.value;
	//console.log(email, uname, passwd, rpass)
	hideAll();
	if (!uname || !passwd) {
		document.querySelector("#nopass")?.classList.remove("hidden");
		document.querySelector("#nopass")?.classList.add("flex");
		return;
	}
	if (passwd !== rpass) {
		document.querySelector("#warning_repeat")?.classList.remove("hidden");
		document.querySelector("#warning_repeat")?.classList.add("flex");
		return;
	}
	if (passwd.length < 8) {
		document.querySelector("#warning_len")?.classList.remove("hidden");
		document.querySelector("#warning_len")?.classList.add("flex");
		return;
	}
	document.querySelector("#creating")?.classList.add("flex");
	document.querySelector("#creating")?.classList.remove("hidden");

	const res = await fetch("/api/admin/add_user", {
		method: "POST",
		body: JSON.stringify({
			session: session,
			uname: uname,
			email: email,
			passwd: passwd,
			rpass: rpass,
			type: type,
		}),
		cache: "no-store",
	});
	if (!res.ok) {
		if (res.status == 409) {
			document.querySelector("#user_conflict")?.classList.add("flex");
			document.querySelector("#user_conflict")?.classList.remove("hidden");
			document.querySelector("#creating")?.classList.remove("flex");
			document.querySelector("#creating")?.classList.add("hidden");
		} else {
			document.querySelector("#warning_data")?.classList.add("flex");
			document.querySelector("#warning_data")?.classList.remove("hidden");
			document.querySelector("#creating")?.classList.remove("flex");
			document.querySelector("#creating")?.classList.add("hidden");
		}
	} else {
		setTimeout(() => {
			router.back();
			router.refresh();
		}, 1);
	}
}
