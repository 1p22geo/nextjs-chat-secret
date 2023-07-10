"use client";

import Message from "@/components/message";
import { translate } from "@/lang";
import MessageObject from "@/lib/types/message";

export default function PublicMessageFeed(props: {
	session: string;
	lang:string,
	messages?:MessageObject[]
}) {
	const dict = translate(props.lang)
	console.log(props.messages)
	const messages = props.messages?props.messages:[]

	return (
		<div className="flex flex-col px-4 items-center sm:items-start gap-8 mb-24">
			{messages.map((message: MessageObject, index) => {
				console.log(message)
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
