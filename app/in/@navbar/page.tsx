import Link from "next/link";

export default function NavbarComponent(){
    return(
    <>
        <div className="p-8 flex flex-col flex-nowrap gap-4">
            <h3 className="caps font-semibold ml-4 text-slate-500 mt-4">Message channels</h3>
            <Link href="/in/public" className="hover:underline cursor-pointer font-semibold text-slate-600">Public messages</Link>
            <Link href="/in/news" className="hover:underline cursor-pointer font-semibold text-slate-600">News feed</Link>
            <Link href="/in/dev" className="hover:underline cursor-pointer font-semibold text-slate-600">{"Developers' feed"}</Link>
            <h3 className="caps font-semibold ml-4 text-slate-500 mt-4">Direct messages</h3>
            <Link href="/in/direct/all" className="hover:underline cursor-pointer font-semibold text-slate-600">All messages</Link>
        </div>
    </>
    )
}