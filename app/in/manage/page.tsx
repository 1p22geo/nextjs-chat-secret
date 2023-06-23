import PublicNicknameEditComponent from "@/components/account_management/pname_edit";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

const AccountManagementPage = async () => {
    const cookie = cookies().get("skyChatSession")
    if(!cookie){
        redirect('/')
    }
    const id = cookie.value;
    return ( <>
    <div className="m-8">
    <h1 className="text-xl mb-8 font-bold">Account Management</h1>
    <h2 className="text-lg font-semibold mb-2">Username</h2>
    <h2 className="text-sm font-base mb-2">The name by which others recognize you</h2>
    <div className="w-fit m-8">
        <PublicNicknameEditComponent session={id}/>
        </div>
    </div>
    </> );
}
 
export default AccountManagementPage;