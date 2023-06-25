'use client'
import { useRouter } from "next/navigation";

const CustomButton = (props: {value:string}) => {
    'use client'
    const router = useRouter()
	return (
		<>
			<input
				type="submit"
				value={props.value}
				className="bg-[#F35627] text-white hover:bg-[#F9703E] shadow-xl hover:shadow-2xl p-2 cursor-pointer rounded-full my-1 ml-2 text-sm"
                onClick={()=>{
                    document.querySelector("#deleting")?.classList.add("flex")
                    document.querySelector("#deleting")?.classList.remove("hidden")
                    setTimeout(()=>{
                        document.querySelector("#deleting")?.classList.remove("flex")
                        document.querySelector("#deleting")?.classList.add("hidden")

                    }, 1000)
                }}
			/>
		</>
	);
};

export default CustomButton;
