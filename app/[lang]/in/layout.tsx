import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { ReactNode } from "react";
import Image from "next/image";
import UserIcon from "@/components/user_icon";
export const revalidate = false;

const MainLayout = async (props: {
	children: ReactNode;
	navbar: ReactNode;
	params:{
		lang:string
	}
}) => {
	const cookie = cookies().get("skyChatSession");
	if (!cookie) {
		redirect("/"+props.params.lang);
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
		redirect("/"+props.params.lang);
	}
	const json = await res.json();
	//console.log(json.session.user)
	////console.log(props)
	return (
		<div className="grid grid-rows-[64px_auto] min-h-screen" id="app_main">
			<header className="bg-[#98AEEB] w-full top-0 left-0 right-0 flex flex-row fixed flex-nowrap items-center">
				<Image
					src="/logo.svg"
					width={48}
					height={48}
					alt="SkyChat logo"
					className="ml-2"
				/>
				<h1 className="self-end ml-4 mb-2 text-2xl font-bold">SkyChat v0.1</h1>
				<UserIcon image="/user-blue.svg" username={json.session.user} lang={props.params.lang} />
			</header>
				<div className="sm:grid sm:grid-cols-[300px_auto] w-screen flex flex-col min-h-screen background_gradient h-fit">
					<div>{props.navbar}</div>
					<div className="sm:w-[calc(100vw-300px)] mt-24">{props.children}</div>
				</div>
		</div>
	);
};

export default MainLayout;
