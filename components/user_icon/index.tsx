"use client"
import Image from "next/image"
import Link from "next/link";

function ToggleDropdown(){
        document.querySelector("#dropdown")?.classList.toggle("hidden")
        document.querySelector("#dropdown")?.classList.toggle("flex")
        document.addEventListener("click", HideDropdown)
}
function HideDropdown(){
        document.querySelector("#dropdown")?.classList.add("hidden")
        document.querySelector("#dropdown")?.classList.remove("flex")
        document.removeEventListener("click", HideDropdown)
}

const UserIcon = (props:{
    image:string,
    username:string
}) => {
    
    return ( 
    <div className="flex flex-col items-center ml-auto mr-4 h-full justify-evenly">
    <Image
        src={props.image}
        width={40}
        height={40}
        alt="user icon"
        className=""
    />
    <div className="flex flex-row flex-nowrap items-center cursor-default">
        <h3 className="text-sm">{props.username}</h3>
        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ToggleDropdown} className="cursor-pointer">
        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"/>
        </svg>
    </div>
    <div className=" flex-col flex-nowrap fixed right-0 top-16 z-50 p-12 hidden" id="dropdown">
        <div className="bg-[#BED0F7] rounded-2xl shadow-2xl" onClick={
            (e)=>{
               //console.log("Doing stuff")
                e.preventDefault()
                return false
            }}>
            <div className="flex flex-nowrap flex-row p-4 items-center gap-4 border-b-2 border-black"> 
                <Image
                src={props.image}
                width={40}
                height={40}
                alt="user icon"
                className=""
                />
                <h3 className="">Logged in as {props.username}</h3>
            </div>
            <div className="flex flex-nowrap flex-row p-4 items-center gap-4 border-b-2 border-black"> 
                <Link href={'/in/'} className="cursor-pointer hover:underline">Messages</Link>
            </div>

            <div className="flex flex-col items-start p-4 gap-2">
                <Link href={'/in/manage'} className="cursor-pointer hover:underline">Manage account</Link>
                <Link href={'/in/settings'} className="cursor-pointer hover:underline">Application settings</Link>
                <Link href={'/in/log'} className="cursor-pointer hover:underline">Full account history</Link>
                <Link href={'/logout'} className="mt-8 text-red-500">Log out</Link>
            </div>
        </div>
    </div>
    </div> );
}
 
export default UserIcon;