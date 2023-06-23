"use client"

import { ReactNode } from "react"

/**
Parameters :
status - this can be "error", "warn", "info", "success" and "loading" - it determines the color of the message.
icon - this can be "security", "tick", "error", or anything else for an "i" letter.
message - this is the main text in the message.
secondary - this is a different text message, will be placed in a small paragraph under the message
children will be placed inside the paragraph, after the secondary.
id - the plain HTML identifier that will be assigned to the message
visible - if true, the message will start visible, otherwise it will start will "display: none;"
*/
export default function Dialog({status,message,secondary,icon,id,visible, children}:{
    status:string,
    message:string,
    secondary?:string,
    icon?:string
    id?:string,
    visible?:boolean,
    children?:ReactNode
}){
    
    let svg;
    let showDialog = false;
    if(visible === true){
        showDialog = true
    }
    switch (status) {
        case "error":
             svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-information"><path className="fill-[#F86A6A]" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="fill-[#CF1124]" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
            switch (icon) {
                case "security": //ok
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-security-important"><path className="fill-[#F86A6A]" d="M4 4l8-2 8 2v9.06a8 8 0 0 1-4.42 7.15L12 22l-3.58-1.79A8 8 0 0 1 4 13.06V4z"></path><path className="fill-[#CF1124]" d="M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 0 1 1-1.1h1a1 1 0 0 1 1 1.1l-.5 5z"></path></svg>
                    break;
                case "tick":
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-check"><circle cx="12" cy="12" r="10" className="fill-[#F86A6A]"></circle><path className="fill-[#CF1124]" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"></path></svg>
                    break;
                case "error": //ok
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-close-circle"><circle cx="12" cy="12" r="10" className="fill-[#F86A6A]"></circle><path className="fill-[#CF1124]" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"></path></svg>
                    break;
                default:
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-information"><path className="fill-[#F86A6A]" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="fill-[#CF1124]" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                    break;
            }
            return( <>
            <div className={`w-full items-center col-span-1 col-start-2 bg-[#FF9B9B] border-l-4  border-[#CF1124] ${showDialog?"flex":"hidden"} p-2`} id={id}>
                {svg}
                <h3 className=" text-[#E12D39] font-bold text-md ">
                    {message}
                {secondary!==null?<p className="text-[#E12D39] font-semibold text-sm">{secondary} {children}</p>:<></>}
                </h3>
                
            </div>
            </>)
    
        case "warn":
             svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-information"><path className="fill-[#F0B429]" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="fill-[#CB6E17]" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
            switch (icon) {
                case "security": //ok
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-security-important"><path className="fill-[#F0B429]" d="M4 4l8-2 8 2v9.06a8 8 0 0 1-4.42 7.15L12 22l-3.58-1.79A8 8 0 0 1 4 13.06V4z"></path><path className="fill-[#CB6E17]" d="M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 0 1 1-1.1h1a1 1 0 0 1 1 1.1l-.5 5z"></path></svg>
                    break;
                case "tick":
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-check"><circle cx="12" cy="12" r="10" className="fill-[#F0B429]"></circle><path className="fill-[#CB6E17]" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"></path></svg>
                    break;
                case "error": //ok
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-close-circle"><circle cx="12" cy="12" r="10" className="fill-[#F0B429]"></circle><path className="fill-[#CB6E17]" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"></path></svg>
                    break;
                default:
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-information"><path className="fill-[#F0B429]" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="fill-[#CB6E17]" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                    break;
            }
            return( <>
            <div className={`w-full items-center col-span-1 col-start-2 bg-[#FADB5F] border-l-4  border-[#CB6E17] ${showDialog?"flex":"hidden"} p-2`} id={id}>
                {svg}
                <h3 className=" text-[#CB6E17] font-bold text-md ">
                    {message}
                {secondary!==null?<p className="text-[#CB6E17] font-semibold text-sm">{secondary} {children}</p>:<></>}
                </h3>
                
            </div>
            </>)

        case "info":
             svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-information"><path className="fill-[#7B93DB]" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="fill-[#35469C]" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
            switch (icon) {
                case "security": //ok
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-security-important"><path className="fill-[#7B93DB]" d="M4 4l8-2 8 2v9.06a8 8 0 0 1-4.42 7.15L12 22l-3.58-1.79A8 8 0 0 1 4 13.06V4z"></path><path className="fill-[#35469C]" d="M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 0 1 1-1.1h1a1 1 0 0 1 1 1.1l-.5 5z"></path></svg>
                    break;
                case "tick":
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-check"><circle cx="12" cy="12" r="10" className="fill-[#7B93DB]"></circle><path className="fill-[#35469C]" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"></path></svg>
                    break;
                case "error": //ok
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-close-circle"><circle cx="12" cy="12" r="10" className="fill-[#7B93DB]"></circle><path className="fill-[#35469C]" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"></path></svg>
                    break;
                default:
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-information"><path className="fill-[#7B93DB]" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="fill-[#35469C]" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                    break;
            }
            return( <>
            <div className={`w-full items-center col-span-1 col-start-2 bg-[#98AEEB] border-l-4  border-[#35469C] ${showDialog?"flex":"hidden"} p-2`} id={id}>
                {svg}
                <h3 className=" text-[#35469C] font-bold text-md ">
                    {message}
                {secondary!==null?<p className="text-[#35469C] font-semibold text-sm">{secondary} {children}</p>:<></>}
                </h3>
                
            </div>
            </>)

        case "success":
             svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-information"><path className="fill-[#51CA58]" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="fill-[#0E7817]" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
            switch (icon) {
                case "security": //ok
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-security-important"><path className="fill-[#51CA58]" d="M4 4l8-2 8 2v9.06a8 8 0 0 1-4.42 7.15L12 22l-3.58-1.79A8 8 0 0 1 4 13.06V4z"></path><path className="fill-[#0E7817]" d="M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 0 1 1-1.1h1a1 1 0 0 1 1 1.1l-.5 5z"></path></svg>
                    break;
                case "tick":
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-check"><circle cx="12" cy="12" r="10" className="fill-[#51CA58]"></circle><path className="fill-[#0E7817]" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"></path></svg>
                    break;
                case "error": //ok
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-close-circle"><circle cx="12" cy="12" r="10" className="fill-[#51CA58]"></circle><path className="fill-[#0E7817]" d="M13.41 12l2.83 2.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 1 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12z"></path></svg>
                    break;
                default:
                    svg = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 mr-4 icon-information"><path className="fill-[#51CA58]" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"></path><path className="fill-[#0E7817]" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></svg>
                    break;
            }
            return( <>
            <div className={`w-full items-center col-span-1 col-start-2 bg-[#91E697] border-l-4  border-[#0E7817] ${showDialog?"flex":"hidden"} p-2`} id={id}>
                {svg}
                <h3 className=" text-[#0E7817] font-bold text-md ">
                    {message}
                {secondary!==null?<p className="text-[#0E7817] font-semibold text-sm">{secondary} {children}</p>:<></>}
                </h3>
                
            </div>
            </>)
        case "loading":
            return( <>
                <div className={`w-full items-center col-span-1 col-start-2 bg-[#91E697] border-l-4  border-[#0E7817] ${showDialog?"flex":"hidden"} p-2`} id={id}>
                <div className='w-8 h-8 bg-emerald-400 rounded-full pt-2 mr-4 animate-spin'>
                    <div className=' w-4 h-4 bg-[#91E697] mx-auto rounded-full'></div>
                    <div className='h-2 w-[4px] bg-emerald-100 translate-x-[14px]'></div>
                </div>
                    <h3 className=" text-[#0E7817] font-bold text-md ">
                        {message}
                    {secondary!==null?<p className="text-[#0E7817] font-semibold text-sm">{secondary} {children}</p>:<></>}
                    </h3>
                    
                </div>
                </>)
        
        default:
            break;
    }
}