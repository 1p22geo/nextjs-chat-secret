import PublicNicknameEditComponent from "@/components/account_management/pname_edit";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

const AccountManagementPage = async () => {
    const cookie = cookies().get("skyChatSession")
    if(!cookie){
        redirect('/')
    }
    const id = cookie.value;
    return ( <>
    <div className="m-8">
    <h1 className="text-xl mb-8 font-bold">Account Management</h1>
    <h2 className="text-lg font-semibold mb-2">Public nickname</h2>
    <p>The name you're visible as for others</p>
    <PublicNicknameEditComponent session={id}/>
    </div>
    </> );
}
 
export default AccountManagementPage;