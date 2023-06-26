import Dialog from "@/components/warning";
import GeneralMessageFeedComponent from "@/components/message_feed";
import { translate } from "@/lang";
import checkSessionCookie from "@/lib/checks/cookie";
import checkUser from "@/lib/checks/user";

const NewsMessagePage = async (props: { params: { lang: string } }) => {
	const dict = translate(props.params.lang);

	const {id, domain, json:{session}} = await  checkSessionCookie()

	const {json:{res:user}} = await checkUser(domain, id, session.user)

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
				type="news"
				messages={user.type=='root'||user.type=='moderator'}
				session={id}
			/>
		</>
	);
};

export default NewsMessagePage;
