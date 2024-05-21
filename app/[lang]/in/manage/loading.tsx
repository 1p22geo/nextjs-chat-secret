"use client"
import { useParams } from "next/navigation";
import 'client-only'
import { translate } from "@/lang";
import Dialog from "@/components/warning";

const LoadingPage = () => {
	"use client"
	const params = useParams()
	const lang = typeof params.lang == "string" ? params.lang : params.lang[0]

	const dict = translate(lang)

	return (
		<div className="w-fit mx-auto mt-24 sm:ml-8">
			<Dialog status="loading" message={dict.manage.loading} visible />
		</div>
	);
};

export default LoadingPage;
