"use client";
import "client-only";
import PublicMessageFeed from "./public";
import MessageSendForm from "@/components/new_message/enabled";
import { FormEvent, useEffect, useRef, useState } from "react";
import MessageObject from "@/lib/types/message";
import { Socket, io } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import Dialog from "@/components/warning";
import { translate } from "@/lang";

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
	const dict = translate(lang);
	const [areMessages, setAreMessages] = useState(false);
	const [isError, setIsError] = useState(false);
	const [messageList, setMessages] = useState<MessageObject[]>([]);
	const sendCallback = useRef<(message: string) => void>(
		(message: string) => {}
	);
	const socketRef = useRef<Socket<DefaultEventsMap, DefaultEventsMap>>();

	useEffect(() => {
		let messagesnum = 4;
		try {
			const item = localStorage.getItem("skyChatConfig.MaxMessageNum");
			messagesnum = parseInt(item?.toString() as string);
			if(isNaN(messagesnum)){
				messagesnum = 4
			}
		} catch {
			messagesnum = 4
		}

		fetch(
			`/api/messages?session=${session}&n=${messagesnum.toString()}&feed=${encodeURIComponent(
				type
			)}`
		).then((res) => {
			res.json().then((json) => {
				if(json){
					setMessages(json.res);
					setAreMessages(true);
					
				}
				else{
					setAreMessages(true);
					setMessages([])
				}
			});
		});
	}, [type, session]);

	useEffect(() => {
		const host = window.location.hostname;
		// socketRef.current = io(`wss://${host}:4433`, {
		socketRef.current = io(`wss://localhost:4433/`, {
			rejectUnauthorized: false,
			reconnection: true,
			reconnectionAttempts: 5,
			reconnectionDelay: 700,
		});
		console.log(type);

		switch (type) {
			case "ch-01":
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
			case "ch-02":
				socketRef.current.on("public_message2", (msg) => {
					console.log("Received message:", msg);
					setMessages((prevMessages) => [msg, ...prevMessages]);
				});

				socketRef.current.on("error", (error) => {
					console.error("WebSocket error:", error);
				});

				sendCallback.current = (message: string) => {
					console.log("Emitting message:", message);
					if (!socketRef.current) return;

					socketRef.current.emit("submit_public_message2", {
						session: session,
						message: message,
					});

					(document.querySelector("#msg") as HTMLInputElement).value = "";
				};
				return () => {
					socketRef.current?.off("public_message2");
					socketRef.current?.off("error");
				};
			case "ch-03":
				socketRef.current.on("public_message3", (msg) => {
					console.log("Received message:", msg);
					setMessages((prevMessages) => [msg, ...prevMessages]);
				});

				socketRef.current.on("error", (error) => {
					console.error("WebSocket error:", error);
				});

				sendCallback.current = (message: string) => {
					console.log("Emitting message:", message);
					if (!socketRef.current) return;

					socketRef.current.emit("submit_public_message3", {
						session: session,
						message: message,
					});

					(document.querySelector("#msg") as HTMLInputElement).value = "";
				};
				return () => {
					socketRef.current?.off("public_message");
					socketRef.current?.off("error");
				};
			default:
				throw new Error("Channel not found.");
		}
	}, [session, type]);

	return (
		<>
			<h2 className="font-semibold mb-4 max-sm:text-center">{dict.messages.channel} {type}</h2>
			{isError?<div className="w-fit mx-auto"><Dialog status="error" icon="error" message={dict.messages.error} visible></Dialog></div>:<></>}
			{areMessages ? (
				<PublicMessageFeed
					lang={lang}
					session={session}
					messages={messageList}
				/>
			) : (
				<div className="w-fit mx-auto">

					<Dialog status="loading" message={dict.messages.loading} visible></Dialog>
				</div>
			)
		}
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
