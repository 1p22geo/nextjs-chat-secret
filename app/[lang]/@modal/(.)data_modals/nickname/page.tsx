import NicknameEditForm from "@/components/account_management/pname_edit/modal";
import Modal from "@/components/modal";

const NicknameDataModal = ({params}:{params:{lang:string}}) => {
    return ( <>
    <Modal>
        <NicknameEditForm lang={params.lang} />
    </Modal>
    </> );
}
 
export default NicknameDataModal;