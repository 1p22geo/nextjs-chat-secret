import Modal from "@/components/modal";
import AdminAddUserForm from "@/lib/admin/util/forms/add_user_modal";
import checkSessionCookie from "@/lib/checks/cookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AdminAddUserModal = ({params:{lang}}:{params:{lang:string}}) => {
    const cookie = cookies().get("skyChatSession");
	if (!cookie) {
		redirect("/");
	}
	const id = cookie.value;
    return ( <>
        <Modal>
            <AdminAddUserForm lang={lang} session={id} />
        </Modal>
    </> );
}
 
export default AdminAddUserModal;