import Link from "next/link";

export default function NavbarComponent(){
    return(
    <>
        <div className="p-8 flex flex-col items-center flex-nowrap gap-4">
            <input className="sr-only peer" defaultChecked type="checkbox" id="burgir"></input>
            <label htmlFor="burgir" className="sm:hidden peer-checked:grid-rows-3 peer-checked:gap-2 grid grid-cols-1 grid-rows-1 gap-0">
                <div className="w-10 h-1 bg-black" ></div>
                <div className="w-10 h-1 bg-black" ></div>
                <div className="w-10 h-1 bg-black" ></div>
            </label>
            <h3 className="caps font-semibold  text-slate-500 mt-4 max-sm:peer-checked:hidden">Message channels</h3>
            <Link href="/in/public" className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-bold text-slate-900">Public messages</Link>
            <Link href="/in/news" className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600">News feed</Link>
            <Link href="/in/dev" className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600">{"Developers' feed"}</Link>
            <h3 className="caps font-semibold text-slate-500 max-sm:peer-checked:hidden mt-4">Direct messages</h3>
            <Link href="/in/direct/all" className="hover:underline max-sm:peer-checked:hidden cursor-pointer font-semibold text-slate-600">All messages</Link>
        </div>
    </>
    )
}