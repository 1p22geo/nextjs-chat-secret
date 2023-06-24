"use client";

import { translate } from "@/lang";
import { useEffect, useState } from "react";

const SettingsPage = ({ params }: { params: { lang: string } }) => {
	const dict = translate(params.lang);
	useEffect(() => {
		const messageNumItem = localStorage.getItem("skyChatConfig.MaxMessageNum");
		let initMessageNum = 4;
		if (messageNumItem) {
			try {
				initMessageNum = parseInt(messageNumItem.toString());
			} catch {
				initMessageNum = 4;
			}
		}
		setMessageNum(initMessageNum);
	}, []);
	const [messageNum, setMessageNum] = useState(3);
	return (
		<>
			<div className="m-8 flex flex-col items-center sm:items-start">
				<h1 className="text-xl mb-8 font-bold">{dict.settings.title}</h1>
				<h3 className="text-base mb-4 group">
					{dict.settings.sections[0].title}
					<div className=" group-hover:block hidden p-2 text-sm text-slate-500 absolute w-fit h-fit bg-white shadow-2xl ml-8">
                    {dict.settings.sections[0].tooltip}
					</div>
				</h3>
				<input
					type="number"
					value={messageNum}
					onChange={(e) => {
						localStorage.setItem(
							"skyChatConfig.MaxMessageNum",
							e.currentTarget.value
						);
						setMessageNum(parseInt(e.currentTarget.value));
					}}
					className="ml-2 outline outline-2 text-left outline-slate-800 p-1"
				></input>
			</div>
		</>
	);
};

export default SettingsPage;
