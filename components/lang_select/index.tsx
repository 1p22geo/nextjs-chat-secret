"use client"
import Link from "next/link";
import { redirect } from "next/navigation";

const LangSelect = (props:{value:string}) => {
	return (
		<div className="absolute left-0 top-0  grid content-center p-16">
			<div className="p-4 flex flex-col items-center gap-2 bg-white rounded-3xl shadow-2xl">
				<h3>Language</h3>
				<select
					name="lang"
					value={props.value}
					onChange={e=>{window.location.replace("/"+e.currentTarget.value)}}
				>
					<option value={"en"}  onClick={()=>{window.location.replace("/en")}}>
						English
					</option>
					<option value={"pl"}  onClick={()=>{window.location.replace("/pl")}}>
						Polish
					</option>
				</select>
			</div>
		</div>
	);
};

export default LangSelect;
