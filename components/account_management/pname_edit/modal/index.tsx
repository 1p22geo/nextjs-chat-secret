"use client"

import { translate } from "@/lang";
import UpdateNicknameAction from "@/lib/account_management_actions/update_nickname";


const NicknameEditForm = ({lang}:{lang:string}) => {
    const dict = translate(lang)
    return ( <>
    <div className="w-fit p-8 bg-[#B2C8F7] rounded-3xl flex flex-col mx-auto items-center gap-4 shadow-2xl">
        <h1 className="text-lg">{dict.manage.components.modals.pname_edit.title}</h1>
        <form action={UpdateNicknameAction} onSubmit={()=>{window.location.replace('/'+lang+"/in/manage")}} className="flex flex-col items-center gap-4">
        <label htmlFor='newNickname'>{dict.manage.components.modals.pname_edit.pname_prompt}
        <input type="text" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" autoFocus name="newNickname" id="newNickname"></input>
        </label>
        <input type="submit" value={dict.manage.components.modals.pname_edit.submit} className="bg-[#F35627] rounded-2xl w-fit text-white hover:bg-[#F9703E] p-2" />
        </form>
    </div>
    </> );
}
 
export default NicknameEditForm;