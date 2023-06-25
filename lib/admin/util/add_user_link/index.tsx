"use client";
import Link from "next/link";

const AddUserModalButton = (props: { lang: string, text:string }) => {
	"use client";
	return (
		<>
			<Link
				href={"/" + props.lang + "/data_modals/admin/add_user"}
				className="p-2 mb-8 rounded-2xl bg-[#F35627] shadow-xl hover:shadow-2xl hover:bg-[#F9703E] text-white"
                onClick={()=>{
                    document.querySelector("#wait_loading")?.classList.add("flex")
                    document.querySelector("#wait_loading")?.classList.remove("hidden")
                }}
			>
				{props.text}
			</Link>
		</>
	);
};

export default AddUserModalButton;
