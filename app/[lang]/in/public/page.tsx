import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Dialog from "@/components/warning";
import GeneralMessageFeedComponent from "@/components/message_feed";
import { translate } from "@/lang";
import checkSessionCookie from "@/lib/checks/cookie";

const PublicMessagePage = async (props: { params: { lang: string } }) => {
	const dict = translate(props.params.lang);

	const {domain, id} = await checkSessionCookie()
	const res = await fetch(`http://${domain}/api/messages?session=${id}&n=5`)
	let messages = []
	if(res.ok){
		messages = (await res.json()).res
	}

	return (
		<>
			<div className="w-full flex flex-col items-center sm:items-start">
				<div className="w-fit">
					<Dialog
						status="loading"
						message={dict.message_bar.sending}
						id="sending"
						absolute
					></Dialog>
					<Dialog
						status="error"
						message={dict.message_bar.failed}
						id="sendingfailed"
						absolute
					></Dialog>
				</div>
			</div>
			<div className="p-8"></div>
			<GeneralMessageFeedComponent
				lang={props.params.lang}
				type="public"
				messages={true}
				session={id}
				initMsg={messages}
			/>
		</>
	);
};

export default PublicMessagePage;
