"use client";

import Message from "@/components/message";
import Dialog from "@/components/warning";
import { translate } from "@/lang";
import fetchNews from "@/lib/fetch_messages/dev";
import MessageObject from "@/lib/types/message";
import { MutableRefObject, useEffect, useState } from "react";

export default function DevMessageFeed(props: {
	session: string;
	callbackRef: MutableRefObject<() => void>;
	lang:string
}) {
	const dict = translate(props.lang)
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetchNews(props.session, setMessages);
	}, [props.session]);
	useEffect(() => {
		const i = setInterval(() => {
			fetchNews(props.session, setMessages, () => {
				setLoading(false);
			});
		}, 700);
		return () => {
			clearInterval(i);
		};
	}, [props.session]);
	useEffect(() => {
		props.callbackRef.current = () => {
			setTimeout(() => {
				fetchNews(props.session, setMessages);
			}, 0);
		};
	}, [props.session]);
	if (loading) {
		return (
			<div className="w-full flex flex-col items-center">
				<div className="w-fit">
					<Dialog status="loading" message={dict.message_bar.loading} visible />
				</div>
			</div>
		);
	}
	return (
		<div className="flex flex-col px-4 items-center sm:items-start gap-8 mb-24">
			{messages.map((message: MessageObject, index) => {
				return (
					<Message
						img="/user-blue.png"
						user={message.user}
						name={message.name}
						content={message.content}
						time={message.added}
						key={index + 1}
					/>
				);
			})}
		</div>
	);
}
