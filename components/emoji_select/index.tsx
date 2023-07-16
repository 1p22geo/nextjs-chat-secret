"use client";

import { MutableRefObject } from "react";
import { emojis } from "./emojis";

export default function EmojiSelect(props: {
	send:(message:string)=>void
}) {
	return (
		<div className=" cursor-default emoji-gradient w-full h-full">
			<div className="overflow-scroll flex gap-2 flex-wrap h-48 p-4 items-start justify-start content-start w-full">
                {emojis.map(emoji=>{
                    return <div className="w-8 h-8 text-center cursor-pointer" onClick={()=>{props.send(emoji)}}>{emoji}</div>
                })}
            </div>
		</div>
	);
}
