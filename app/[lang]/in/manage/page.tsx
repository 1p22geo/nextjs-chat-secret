import PasswordEditComponent from "@/components/account_management/passwd_edit";
import PublicNicknameEditComponent from "@/components/account_management/pname_edit";
import checkSessionCookie from "@/lib/checks/cookie";
import checkUser from "@/lib/checks/user";

const AccountManagementPage = async ({ params }: { params: { lang: string } }) => {

	const {json, id, domain} = await checkSessionCookie()
	// console.log(json)
    
    const {json:json2} = await checkUser(domain, id, json.session.user)
	// console.log(json2)


	return (
		<>
			<div className="m-8 flex flex-col items-center sm:items-start">
				<h1 className="text-xl mb-8 font-bold">Account Management</h1>
				<h2 className="text-lg font-semibold mb-2">Username</h2>
				<h2 className="text-sm font-base mb-2">
					The name by which others recognize you
				</h2>
				<div className="w-fit m-8">
					<PublicNicknameEditComponent lang={params.lang} session={json.session} user={json2.res} />
				</div>
				<h2 className="text-lg font-semibold mb-2">Password</h2>
				<h2 className="text-sm font-base mb-2">
					You should change your password regularily
				</h2>
				<div className="w-fit m-8">
                    <PasswordEditComponent lang={params.lang} session={json.session} user={json2.res} />
                </div>
			</div>
		</>
	);
};

export default AccountManagementPage;
