"use client";
import "client-only";
import PublicMessageFeed from "./public";
import MessageSendForm from "@/components/new_message/enabled";
import { FormEvent, useEffect, useRef, useState } from "react";
import MessageObject from "@/lib/types/message";
import { Socket, io } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

const GeneralMessageFeedComponent = ({
	type,
	session,
	lang,
	messages,
	initMsg,
}: {
	type: string;
	session: string;
	lang: string;
	messages: boolean;
	initMsg?: MessageObject[];
}) => {
	const [messageList, setMessages] = useState(initMsg ? initMsg : []);
	const sendCallback = useRef<(message: string) => void>(
		(message: string) => {}
	);
	const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();

	useEffect(() => {
		socketRef.current = io("wss://192.168.50.156:4433", {
			rejectUnauthorized: false,
			reconnection: true,
			reconnectionAttempts: 5,
			reconnectionDelay: 700,
		});


		socketRef.current.on("public_message", (msg) => {
			console.log("Received message:", msg);
			setMessages((prevMessages) => [msg, ...prevMessages]);
		});

		socketRef.current.on("error", (error) => {
			console.error("WebSocket error:", error);
		});

		sendCallback.current = (message: string) => {
			console.log("Emitting message:", message);
			if (!socketRef.current) return;

			socketRef.current.emit("submit_public_message", {
				session: session,
				message: message,
			});

			(document.querySelector("#msg") as HTMLInputElement).value = "";
		};

		return () => {
			socketRef.current?.off("public_message");
			socketRef.current?.off("error");
		};
	}, [session]);

	return (
		<>
			<PublicMessageFeed lang={lang} session={session} messages={messageList} />
			{messages && (
				<MessageSendForm
					lang={lang}
					session={session}
					onSubmit={async (e: FormEvent) => {
						e.preventDefault();
						sendCallback.current(
							(document.querySelector("#msg") as HTMLInputElement).value
						);
						return false;
					}}
				/>
			)}
		</>
	);
};

export default GeneralMessageFeedComponent;
