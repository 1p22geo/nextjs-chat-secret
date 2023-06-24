import { translate } from "@/lang";
import Link from "next/link";

export default function NavbarComponent({ params }: { params: { lang: string } }){
    const dict = translate(params.lang)
    return(
    <>
        <div className="p-8 flex flex-col items-center fixed left-0 top-16 flex-nowrap gap-4">
            <input className="sr-only peer" defaultChecked type="checkbox" id="burgir"></input>
            <label htmlFor="burgir" className="sm:hidden peer-checked:grid-rows-3 self-start peer-checked:gap-2 grid grid-cols-1 grid-rows-1 gap-0">
                <div className="w-10 h-1 bg-black" ></div>
                <div className="w-10 h-1 bg-black" ></div>
                <div className="w-10 h-1 bg-black" ></div>
            </label>
            <div className="max-sm:peer-checked:hidden flex flex-col items-center gap-4 max-sm:bg-[#BED0F7] p-4 max-sm:rounded-2xl max-sm:shadow-2xl">
            <h3 className="caps font-semibold  text-slate-500 mt-4 max-sm:peer-checked:hidden">{dict.navbar.titles[0]}</h3>
            <span className="max-sm:peer-checked:hidden cursor-default font-semibold text-slate-900">{dict.navbar.links.channels[0]}</span>
            <Link href={"/"+params.lang+"/in/news"} className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600">{dict.navbar.links.channels[1]}</Link>
            <Link href={"/"+params.lang+"/in/dev"} className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600">{dict.navbar.links.channels[2]}</Link>
            <h3 className="caps font-semibold text-slate-500 max-sm:peer-checked:hidden mt-4">{dict.navbar.titles[1]}</h3>
            <Link href={"/"+params.lang+"/in/direct"} className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600">{dict.navbar.links.direct}</Link>
            </div>
        </div>
    </>
    )
}