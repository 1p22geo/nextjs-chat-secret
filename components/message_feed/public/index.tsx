"use client";

import Message from "@/components/message";
import Dialog from "@/components/warning";
import fetchMessages from "@/lib/fetch_messages";
import MessageObject from "@/lib/types/message";
import { MutableRefObject, useEffect, useState } from "react";

export default function PublicMessageFeed(props: {
	session: string;
	callbackRef: MutableRefObject<() => void>;
}) {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetchMessages(props.session, setMessages);
	}, [props.session]);
	useEffect(() => {
		const i = setInterval(() => {
			fetchMessages(props.session, setMessages, () => {
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
				fetchMessages(props.session, setMessages);
			}, 0);
		};
	}, [props.session]);
	if (loading) {
		return (
			<div className="w-full flex flex-col items-center">
				<div className="w-fit">
					<Dialog status="loading" message="Loading messages" visible />
				</div>
			</div>
		);
	}
	return (
		<div className="flex flex-col items-center sm:items-start gap-8 mb-24">
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
