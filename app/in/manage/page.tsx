import PasswordEditComponent from "@/components/account_management/passwd_edit";
import PublicNicknameEditComponent from "@/components/account_management/pname_edit";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const AccountManagementPage = async () => {
	const cookie = cookies().get("skyChatSession");
	if (!cookie) {
		redirect("/");
	}
	const id = cookie.value;


    const headersList = headers();
    
    const domain = headersList.get('host');
    ////console.log(domain)
    const url = new URL(`http://${domain}/api/session/check?session=${id}`)
    // console.log(url)
    
    const res = await fetch(url, { next:{revalidate:0}})
   //console.log(res.status)
    if(!res.ok){
        redirect('/')
    }
    const json = await res.json()
	// console.log(json)
    
    const url2 = new URL(`http://${domain}/api/user?session=${id}&user=${json.session.user}`)
    // console.log(url)
    
    const res2 = await fetch(url2, { next:{revalidate:0}})
   //console.log(res.status)
    if(!res2.ok){
        redirect('/')
    }
    const json2 = await res2.json()
	// console.log(json2)


	return (
		<>
			<div className="m-8">
				<h1 className="text-xl mb-8 font-bold">Account Management</h1>
				<h2 className="text-lg font-semibold mb-2">Username</h2>
				<h2 className="text-sm font-base mb-2">
					The name by which others recognize you
				</h2>
				<div className="w-fit m-8">
					<PublicNicknameEditComponent session={json.session} user={json2.res} />
				</div>
				<h2 className="text-lg font-semibold mb-2">Password</h2>
				<h2 className="text-sm font-base mb-2">
					You should change your password regularily
				</h2>
				<div className="w-fit m-8">
                    <PasswordEditComponent session={json.session} user={json2.res} />
                </div>
			</div>
		</>
	);
};

export default AccountManagementPage;
