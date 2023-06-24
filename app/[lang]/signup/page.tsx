import SignInForm from "@/components/sign_in_form";


const SignupPage = ({ params }: { params: { lang: string } }) => {
    return ( <>
        <div className="w-screen h-screen grid content-center background_gradient">
            <SignInForm lang={params.lang} />
        </div>
    </> );
}
 
export default SignupPage;