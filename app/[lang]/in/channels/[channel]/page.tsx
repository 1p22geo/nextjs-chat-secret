import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Dialog from "@/components/warning";
import GeneralMessageFeedComponent from "@/components/message_feed";
import { translate } from "@/lang";
import checkSessionCookie from "@/lib/checks/cookie";

const PublicMessagePage = async (props: {
	params: { lang: string, channel:string };
}) => {
	const dict = translate(props.params.lang);

	const { id } = await checkSessionCookie();

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
			<GeneralMessageFeedComponent
				lang={props.params.lang}
				type={'ch-'+props.params.channel}
				messages={true}
				session={id}
			/>
		</>
	);
};

export default PublicMessagePage;
