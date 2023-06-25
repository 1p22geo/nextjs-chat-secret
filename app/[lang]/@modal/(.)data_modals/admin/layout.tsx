import checkSessionCookie from "@/lib/checks/cookie";
import checkUser from "@/lib/checks/user";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const AdminDataModalLayout = async ({params:{lang}, children}:{params:{lang:string}, children:ReactNode}) => {
    const {json:{session}, id, domain} = await checkSessionCookie()
    const {json:{res:user}} = await checkUser(domain, id, session.user)
    if(user.type!='root')redirect('/')
    return ( <>{children}</> );
}
 
export default AdminDataModalLayout;