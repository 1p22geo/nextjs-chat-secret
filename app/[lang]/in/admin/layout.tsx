import checkSessionCookie from "@/lib/checks/cookie";
import checkUser from "@/lib/checks/user";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const layout = async (props: {
	children: ReactNode;
	params: {
		lang: string;
	};
}) => {
    const {json:{session}, domain, id} = await checkSessionCookie()

    const {json:{res:user}} = await checkUser(domain, id, session.user)

    if(user.type != 'root'){
        redirect('/'+props.params.lang+'/in/')
    }

	return <>{props.children}</>;
};

export default layout;
