import Link from "next/link";
import LangSelect from "@/components/lang_select";
import { translate } from "@/lang";



export default async function Home({ params }: { params: { lang: string } }) {
	const dict = translate(params.lang)
	//<div className='absolute min-h-screen w-screen left-0 top-0 background_gradient'></div>
	return (
		<>
			<LangSelect value={params.lang} />
			<div className="background_gradient px-8 flex min-h-screen flex-col items-center text-center pb-24">
				<h1 className="md:text-6xl sm:text-5xl text-4xl mb-6 mt-24 font-semibold">
					{dict.index.title}
				</h1>
				<h2 className="text-2xl font-extralight">{dict.index.subtitle}</h2>
				<Link
					href={params.lang + "/signup"}
					className="flex flex-col items-center bg-[#F35627] rounded-xl p-4 gap-2 text-white mt-12 shadow-2xl"
				>
					<span className="text-3xl font-semibold">
						{dict.index.button.title}
					</span>
					<span>{dict.index.button.subtitle}</span>
				</Link>
				<Link
					href={params.lang + "/login"}
					className=" hover:underline mt-8 text-sm"
				>
					{dict.index.login}
				</Link>
				<h3 className="text-3xl mt-20 mb-8">{dict.index.features.title}</h3>
				<div className="md:grid md:grid-cols-3 flex flex-col max-w-[1000px] gap-16">
					<div className="flex flex-col items-center">
						<div className="bg-[#FFD0B5] rounded-full w-24 h-24 p-4 mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className=" icon-launch"
							>
								<path
									className="secondary"
									d="M6.64 6.46h7.07a1 1 0 0 1 .7 1.71l-4.24 4.24a1 1 0 0 1-.7.3H2.38A1 1 0 0 1 1.7 11l4.24-4.24a1 1 0 0 1 .7-.3zm10.9 10.9a1 1 0 0 1-.3.71L13 22.31a1 1 0 0 1-1.7-.7v-7.07a1 1 0 0 1 .29-.71l4.24-4.24a1 1 0 0 1 1.7.7v7.07z"
								></path>
								<path
									className="primary"
									d="M5.78 13.19a15.94 15.94 0 0 1 14.39-10.4 1 1 0 0 1 1.04 1.04 15.94 15.94 0 0 1-10.4 14.39 1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16zm.59 2.57a16.2 16.2 0 0 1 1.87 1.87 1 1 0 0 1-.47 1.6c-.79.25-1.6.42-2.4.54a1 1 0 0 1-1.14-1.13c.12-.82.3-1.62.53-2.41a1 1 0 0 1 1.6-.47z"
								></path>
								<path
									className="secondary"
									d="M7.23 10.26a19.04 19.04 0 0 1 6.5 6.51c-.92.58-1.9 1.07-2.92 1.45a1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16c.38-1.03.87-2 1.45-2.93zM17.62 3.1c.84-.17 1.7-.27 2.55-.3a1 1 0 0 1 1.04 1.04c-.03.86-.13 1.71-.3 2.55a19.2 19.2 0 0 0-3.29-3.29zm-3.91 7.2a2 2 0 1 1 2.83-2.83 2 2 0 0 1-2.83 2.83z"
								></path>
							</svg>
						</div>
						<h4 className="text-xl mb-2">{dict.index.features.features[0].title}</h4>
						<p className="">
							{dict.index.features.features[0].text}
						</p>
					</div>
					<div className="flex flex-col items-center">
						<div className="bg-[#FFD0B5] rounded-full w-24 h-24 p-4 mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="icon-lock"
							>
								<g>
									<path
										className="secondary"
										d="M12 10v3a2 2 0 0 0-1 3.73V18a1 1 0 0 0 1 1v3H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h7z"
									/>
									<path
										className="primary"
										d="M12 19a1 1 0 0 0 1-1v-1.27A2 2 0 0 0 12 13v-3h3V7a3 3 0 0 0-6 0v3H7V7a5 5 0 1 1 10 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7v-3z"
									/>
								</g>
							</svg>
						</div>
						<h4 className="text-xl mb-2">{dict.index.features.features[1].title}</h4>
						<p className="">
							{dict.index.features.features[1].text}
						</p>
					</div>
					<div className="flex flex-col items-center">
						<div className="bg-[#FFD0B5] rounded-full w-24 h-24 p-4 mb-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="icon-user"
							>
								<path
									className="primary"
									d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"
								/>
								<path
									className="secondary"
									d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"
								/>
							</svg>
						</div>
						<h4 className="text-xl mb-2">{dict.index.features.features[2].title}</h4>
						<p className="">
							{dict.index.features.features[2].text}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
