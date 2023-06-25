import _deleteUser from "./action"

export default function createDeleteUserAction(user:string, lang:string){
    return async (e:FormData)=>{
        "use server"
        return await _deleteUser(e, user, lang)
    }
}