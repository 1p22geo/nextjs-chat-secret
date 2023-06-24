import PasswordEditForm from "@/components/account_management/passwd_edit/modal";
import Modal from "@/components/modal";

const PasswordDataModal = ({params}:{params:{lang:string}}) => {
    return ( <>
    <Modal>
        <PasswordEditForm lang={params.lang} />
    </Modal>
    </> );
}
 
export default PasswordDataModal   ;