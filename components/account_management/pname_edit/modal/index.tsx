"use client"

import UpdateNicknameAction from "@/lib/account_management_actions/update_nickname";


const NicknameEditForm = () => {
    return ( <>
    <div className="w-fit p-8 bg-[#B2C8F7] rounded-3xl flex flex-col mx-auto items-center gap-4 shadow-2xl">
        <h1 className="text-lg">Change nickname</h1>
        <form action={UpdateNicknameAction} onSubmit={()=>{window.location.replace("/in/manage")}} className="flex flex-col items-center gap-4">
        <label htmlFor='newNickname'>New nickname:
        <input type="text" className="ml-2 outline outline-2 text-left outline-slate-800 p-1" autoFocus name="newNickname" id="newNickname"></input>
        </label>
        <input type="submit" value="Update" className="bg-[#F35627] rounded-2xl w-fit text-white hover:bg-[#F9703E] p-2" />
        </form>
    </div>
    </> );
}
 
export default NicknameEditForm;