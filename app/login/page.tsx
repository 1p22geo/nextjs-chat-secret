import LoginForm from "@/components/login_form";

const LoginPage = () => {
    return ( <>
        <div className="w-screen h-screen grid content-center background_gradient">
            <div className="w-fit mx-auto">
                <LoginForm />
            </div>
        </div>
    </> );
    /*
            <form method="post" action={'/api/login/check'} className="p-8 bg-[#B2C8F7] rounded-3xl shadow-2xl w-fit mx-auto flex flex-col items-center gap-4">
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
 
export default LoginPage;