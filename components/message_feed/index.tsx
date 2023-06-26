"use client";
import "client-only";
import PublicMessageFeed from "./public";

import MessageSendForm from "@/components/new_message/enabled";
import MessageSubmittedHandler from "@/lib/message_submitted";
import NewsMessageSubmittedHandler from "@/lib/message_submitted/news";
import { useRef } from "react";
import NewsMessageFeed from "./news";
import DevMessageFeed from "./dev";
import DevMessageSubmittedHandler from "@/lib/message_submitted/dev";

const GeneralMessageFeedComponent = ({
	type,
	session,
	lang,
	messages,
}: {
	type: string;
	session: string;
	lang: string;
	messages: boolean;
}) => {
	const callbackRef = useRef(() => {});
	switch (type) {
		case "public":
			return (
				<>
					<PublicMessageFeed
						lang={lang}
						callbackRef={callbackRef}
						session={session}
					/>
					{messages ? (
						<MessageSendForm
							lang={lang}
							session={session}
							callbackRef={callbackRef}
							onSubmit={MessageSubmittedHandler}
						/>
					) : (
						<></>
					)}
				</>
			);
		case "news":
			return (
				<>
					<NewsMessageFeed
						lang={lang}
						callbackRef={callbackRef}
						session={session}
					/>
					{messages ? (
						<MessageSendForm
							lang={lang}
							session={session}
							callbackRef={callbackRef}
							onSubmit={NewsMessageSubmittedHandler}
						/>
					) : (
						<></>
					)}
				</>
			);
		case "dev":
			return (
				<>
					<DevMessageFeed
						lang={lang}
						callbackRef={callbackRef}
						session={session}
					/>
					{messages ? (
						<MessageSendForm
							lang={lang}
							session={session}
							callbackRef={callbackRef}
							onSubmit={DevMessageSubmittedHandler}
						/>
					) : (
						<></>
					)}
				</>
			);
	}
};

export default GeneralMessageFeedComponent;
