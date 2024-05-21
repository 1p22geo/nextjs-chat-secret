"use client"
import { useParams } from "next/navigation";
import 'client-only'
import { translate } from "@/lang";
import Dialog from "@/components/warning";

const ErrorPage = () => {
	"use client"
	const params = useParams()
	const lang = typeof params.lang == "string" ? params.lang : params.lang[0]

	const dict = translate(lang)

	return (
		<div className="w-fit mx-auto mt-24 sm:ml-8">
			<Dialog status="error" icon="error" message={dict.admin.users.error[0]} secondary={dict.admin.users.error[1]} visible />
		</div>
	);
};

export default ErrorPage;
