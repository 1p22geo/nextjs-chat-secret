import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Dialog from "@/components/warning";
import GeneralMessageFeedComponent from "@/components/message_feed";
import { translate } from "@/lang";

const PublicMessagePage = async (props: { params: { lang: string } }) => {
	const dict = translate(props.params.lang);

	const cookie = cookies().get("skyChatSession");
	if (!cookie) {
		redirect("/");
	}

	const id = cookie.value;

	return (
		<>
			<div className="w-full flex flex-col items-center sm:items-start">
				<div className="w-fit">
					<Dialog
						status="loading"
						message={dict.message_bar.sending}
						id="sending"
					></Dialog>
					<Dialog
						status="error"
						message={dict.message_bar.failed}
						id="sendingfailed"
					></Dialog>
				</div>
			</div>
			<div className="p-8"></div>
			<GeneralMessageFeedComponent
				lang={props.params.lang}
				type="public"
				session={id}
			/>
		</>
	);
};

export default PublicMessagePage;
