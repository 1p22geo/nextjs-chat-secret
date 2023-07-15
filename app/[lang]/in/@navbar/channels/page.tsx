import { translate } from "@/lang";
import checkSessionCookie from "@/lib/checks/cookie";
import checkUser from "@/lib/checks/user";
import Link from "next/link";

export default async function NavbarComponent({
	params,
}: {
	params: { lang: string };
}) {
	const dict = translate(params.lang);
	const { json ,id, domain } = await checkSessionCookie();
    const {json:{res:user}} = await checkUser(domain, id, json.session.user)
	return (
		<>
			<div className="p-8 flex flex-col items-center fixed left-0 top-16 flex-nowrap gap-4">
				<input
					className="sr-only peer"
					defaultChecked
					type="checkbox"
					id="burgir"
				></input>
				<label
					htmlFor="burgir"
					className="sm:hidden peer-checked:grid-rows-3 self-start peer-checked:gap-2 grid grid-cols-1 grid-rows-1 gap-0"
				>
					<div className="w-10 h-1 bg-black"></div>
					<div className="w-10 h-1 bg-black"></div>
					<div className="w-10 h-1 bg-black"></div>
				</label>
				<div className="max-sm:peer-checked:hidden flex flex-col items-center gap-4 max-sm:bg-[#BED0F7] p-4 max-sm:rounded-2xl max-sm:shadow-2xl">
                {user.type==='root'?<Link
						href={"/" + params.lang + "/in/admin"}
						className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600"
					>
						{dict.navbar.admin.title}
					</Link>:<></>}
					<h3 className="caps font-semibold  text-slate-500 mt-4 max-sm:peer-checked:hidden">
						{dict.navbar.titles[0]}
					</h3>
					<Link
						href={"/" + params.lang + "/in/channels/01"}
						className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600"
					>
						{dict.navbar.links.channels[0]}
					</Link>
					<Link
						href={"/" + params.lang + "/in/channels/02"}
						className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600"
					>
						{dict.navbar.links.channels[1]}
					</Link>
					<Link
						href={"/" + params.lang + "/in/channels/03"}
						className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600"
					>
						{dict.navbar.links.channels[2]}
					</Link>
					<h3 className="caps font-semibold text-slate-500 max-sm:peer-checked:hidden mt-4">
						{dict.navbar.titles[1]}
					</h3>
					<Link
						href={"/" + params.lang + "/in/direct"}
						className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600"
					>
						{dict.navbar.links.direct}
					</Link>
				</div>
			</div>
		</>
	);
}
