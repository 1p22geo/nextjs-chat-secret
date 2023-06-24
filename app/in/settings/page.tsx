"use client";

import { useState } from "react";

const SettingsPage = () => {
    const messageNumItem = localStorage.getItem("skyChatConfig.MaxMessageNum")
    let initMessageNum = 4;
    if(messageNumItem){
        try{
            initMessageNum = parseInt(messageNumItem.toString())
        }
        catch{
            initMessageNum = 4;
        }
    }
    const [messageNum, setMessageNum] = useState(initMessageNum)
	return (
		<>
			<div className="m-8 flex flex-col items-center sm:items-start">
				<h1 className="text-xl mb-8 font-bold">Application settings</h1>
				<h3 className="text-base mb-4 group">
					Max message number
					<div className=" group-hover:block hidden p-2 text-sm text-slate-500 absolute w-fit h-fit bg-white shadow-2xl ml-8">
						You will see at most this much messages at once.
					</div>
                    
				</h3>
                <input type="number" value={messageNum} onChange={(e)=>{
                    localStorage.setItem("skyChatConfig.MaxMessageNum", e.currentTarget.value)
                    setMessageNum(parseInt(e.currentTarget.value))
                }}></input>
			</div>
		</>
	);
};

export default SettingsPage;
