import Link from "next/link";

export default function NavbarComponent({ params }: { params: { lang: string } }){
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
            <h3 className="caps font-semibold  text-slate-500 mt-4 max-sm:peer-checked:hidden">Message channels</h3>
            <h3 className="max-sm:peer-checked:hidden cursor-default font-bold text-slate-900">Public messages</h3>
            <Link href={"/"+params.lang+"/in/news"} className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600">News feed</Link>
            <Link href={"/"+params.lang+"/in/dev"} className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600">{"Developers' feed"}</Link>
            <h3 className="caps font-semibold text-slate-500 max-sm:peer-checked:hidden mt-4">Direct messages</h3>
            <Link href={"/"+params.lang+"/in/direct"} className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600">All messages</Link>
            </div>
        </div>
    </>
    )
}