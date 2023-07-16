"use client";

import EmojiSelect from "@/components/emoji_select";
import { translate } from "@/lang";
import { FormEvent, MutableRefObject, useRef } from "react";

const MessageSendForm = (props: {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
	session: string;
	lang: string;
}) => {
	const dict = translate(props.lang);
    const inputref = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>

	return (
		<>
			<div className="fixed right-0 bottom-0 w-full z-20 max-w-[900px] p-8 ">
				<form onSubmit={props.onSubmit} className="flex items-center">
					<div className="h-8 w-8 -mr-10 z-30 rounded-full cursor-pointer hover:bg-slate-300 group">
						<div className="fixed right-0 bottom-[72px] cursor-default  w-full hidden group-hover:block max-w-[900px] px-8 h-72">
							<EmojiSelect send={(message:string)=>{
                                inputref.current.value += message
                            }} />
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							className="w-8 mr-4 icon-add"
						>
							<path
								className="fill-slate-600"
								fillRule="evenodd"
								d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
							/>
						</svg>
					</div>
					<input
						id="msg"
						name="msg"
						autoFocus={true}
                        ref={inputref}
						type="text"
						className={`rounded-full p-3 text-xl pl-12 w-full shadow-2xl pr-28 flex accent-[#F35627] caret-[#F35627]`}
						placeholder={dict.message_bar.enabled}
					></input>
					<label
						htmlFor="submitmsg"
						className={`p-2 bg-[#F35627] cursor-pointer w-24 justify-evenly -ml-[102px] rounded-full flex items-center font-semibold text-white`}
					>
						<h3>{dict.message_bar.send}</h3>
						<svg
							width="20px"
							height="20px"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20.33 3.66996C20.1408 3.48213 19.9035 3.35008 19.6442 3.28833C19.3849 3.22659 19.1135 3.23753 18.86 3.31996L4.23 8.19996C3.95867 8.28593 3.71891 8.45039 3.54099 8.67255C3.36307 8.89471 3.25498 9.16462 3.23037 9.44818C3.20576 9.73174 3.26573 10.0162 3.40271 10.2657C3.5397 10.5152 3.74754 10.7185 4 10.85L10.07 13.85L13.07 19.94C13.1906 20.1783 13.3751 20.3785 13.6029 20.518C13.8307 20.6575 14.0929 20.7309 14.36 20.73H14.46C14.7461 20.7089 15.0192 20.6023 15.2439 20.4239C15.4686 20.2456 15.6345 20.0038 15.72 19.73L20.67 5.13996C20.7584 4.88789 20.7734 4.6159 20.7132 4.35565C20.653 4.09541 20.5201 3.85762 20.33 3.66996ZM4.85 9.57996L17.62 5.31996L10.53 12.41L4.85 9.57996ZM14.43 19.15L11.59 13.47L18.68 6.37996L14.43 19.15Z"
								fill="#fff"
							/>
						</svg>
					</label>
					<input
						type="submit"
						className="sr-only"
						id="submitmsg"
						value={"Send"}
					></input>
				</form>
			</div>
		</>
	);
};

export default MessageSendForm;
