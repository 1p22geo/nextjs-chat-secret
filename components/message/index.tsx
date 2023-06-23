import Image from "next/image"

const Message = (props:{img:string, user:string, content:string, time:number, name:string}) => {
    const sent = new Date(props.time)
    return ( 
    <>
    <div className="bg-[#BED0F7] shadow-2xl w-fit p-4 rounded-3xl">
        <div className="flex items-center gap-4">
            <Image
                src={props.img}
                width={40}
                height={40}
                alt="user icon"
                className=""
            />
            <div className="flex items-baseline gap-8">
            <div className="flex flex-col items-start">
            <h2 className="font-semibold text-base">{props.name}</h2>
            <h2 className=" font-light text-slate-600 text-xs">{props.user}</h2>
            </div>
            <h2 className="text-slate-700">{sent.toLocaleString()}</h2>
            </div>
        </div>
        <div className="mt-2">
            {props.content}
        </div>
    </div>
    </> 
    );
}
 
export default Message;