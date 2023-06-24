import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function checkCookieLang(lang:string){
    const cookie = cookies().get("skyChatSession");
	if (!cookie) {
		return;
	}
	const id = cookie.value;
	const headersList = headers();

	const domain = headersList.get("host");
	////console.log(domain)
	const url = new URL(`http://${domain}/api/session/check?session=${id}`);
	// console.log(url)

	const res = await fetch(url, { next: { revalidate: false } });
	//console.log(res.status)
	if (!res.ok) {
		return;
	}
	redirect("/" + lang + "/in");
}