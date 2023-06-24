import LoginForm from "@/components/login_form";
import Modal from "@/components/modal";


export default function LoginModal({params}:{params:{lang:string}}) {
    return(
        <Modal>
            <LoginForm lang={params.lang} />
        </Modal>
    )
    /*
            <form method="post" action={'/api/login/check'} className="w-full p-8 bg-[#B2C8F7] rounded-3xl flex flex-col items-center gap-4">
                <h1 className=" text-2xl font-semibold">Log in to continue</h1>
                <div>
                <label htmlFor='uname'>Username:</label>
                <input type="text" className="ml-2 outline outline-2 outline-slate-800 p-1" name="uname" id="uname"></input>
                </div>
                <div>
                <label htmlFor='passwd'>Password:</label>
                <input type="password" className="ml-2 outline outline-2 outline-slate-800 p-1" name="passwd" id="passwd"></input>
                </div>
                <input type="submit" value={"Submit"} className="bg-[#F35627] cursor-pointer font-semibold text-white p-2 rounded-md"></input>
            </form>

    */
}