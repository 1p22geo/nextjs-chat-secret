import { translate } from "@/lang";

const DirectMessagePage = ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
    const dict = translate(lang)
	return (
		<>
			<h1 className="text-lg font-semibold">{dict.direct_messages_work_in_progress.title}</h1>
			<h1>{dict.direct_messages_work_in_progress.subtitle}</h1>
		</>
	);
};

export default DirectMessagePage;
