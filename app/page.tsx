import Link from 'next/link'

export default function Home() {
  //<div className='absolute min-h-screen w-screen left-0 top-0 background_gradient'></div>
  return (
    <div className='background_gradient px-8 flex min-h-screen flex-col items-center text-center'>
      <h1 className='text-6xl mb-6 mt-24 font-semibold'>Welcome to SkyChat</h1>
      <h2 className='text-2xl font-extralight'>the most modern chat app ever built.</h2>
      <Link href='/signup' className='flex flex-col items-center bg-[#F35627] rounded-xl p-4 gap-2 text-white mt-12 shadow-2xl'>
        <span className='text-3xl font-semibold'>Sign up</span>
        <span>(for free, no credit card required)</span>
      </Link>
      <Link href='/login' className=' hover:underline mt-8 text-sm'>
        Or log in if you already have an account
      </Link>
      <h3 className='text-3xl mt-20 mb-8'>Our features:</h3>
      <div className='grid grid-cols-3 w-2/3 gap-16'>
        <div className='flex flex-col items-center'>
          <div className='bg-[#FFD0B5] rounded-full w-24 h-24 p-4 mb-4'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className=" icon-launch"><path className="secondary" d="M6.64 6.46h7.07a1 1 0 0 1 .7 1.71l-4.24 4.24a1 1 0 0 1-.7.3H2.38A1 1 0 0 1 1.7 11l4.24-4.24a1 1 0 0 1 .7-.3zm10.9 10.9a1 1 0 0 1-.3.71L13 22.31a1 1 0 0 1-1.7-.7v-7.07a1 1 0 0 1 .29-.71l4.24-4.24a1 1 0 0 1 1.7.7v7.07z"></path><path className="primary" d="M5.78 13.19a15.94 15.94 0 0 1 14.39-10.4 1 1 0 0 1 1.04 1.04 15.94 15.94 0 0 1-10.4 14.39 1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16zm.59 2.57a16.2 16.2 0 0 1 1.87 1.87 1 1 0 0 1-.47 1.6c-.79.25-1.6.42-2.4.54a1 1 0 0 1-1.14-1.13c.12-.82.3-1.62.53-2.41a1 1 0 0 1 1.6-.47z"></path><path className="secondary" d="M7.23 10.26a19.04 19.04 0 0 1 6.5 6.51c-.92.58-1.9 1.07-2.92 1.45a1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16c.38-1.03.87-2 1.45-2.93zM17.62 3.1c.84-.17 1.7-.27 2.55-.3a1 1 0 0 1 1.04 1.04c-.03.86-.13 1.71-.3 2.55a19.2 19.2 0 0 0-3.29-3.29zm-3.91 7.2a2 2 0 1 1 2.83-2.83 2 2 0 0 1-2.83 2.83z"></path></svg>
          </div>
          <h4 className='text-xl mb-2'>The fastest delivery in town</h4>
          <p className=''>We send and process your messages as fast as we can.</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#FFD0B5] rounded-full w-24 h-24 p-4 mb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-lock"><g><path className="secondary" d="M12 10v3a2 2 0 0 0-1 3.73V18a1 1 0 0 0 1 1v3H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h7z"/><path className="primary" d="M12 19a1 1 0 0 0 1-1v-1.27A2 2 0 0 0 12 13v-3h3V7a3 3 0 0 0-6 0v3H7V7a5 5 0 1 1 10 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7v-3z"/></g></svg>
          </div>
          <h4 className='text-xl mb-2'>End-to-end security built in</h4>
          <p className=''>All your messages are thoroughly encrypted before even getting sent.</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-[#FFD0B5] rounded-full w-24 h-24 p-4 mb-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon-user"><path className="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/><path className="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"/></svg>
          </div>
          <h4 className='text-xl mb-2'>Direct and broadcast messages</h4>
          <p className=''>You can say anything either to one or two friends or to the whole world.</p>
        </div>
      </div>
      <div className='mt-[50vh] bg-slate-500 footer_shadow w-full grid grid-cols-[1fr_2fr] text-left gap-14 font-serif'>
        <div className=' p-8 text-slate-900'>
          <p>Made by Bartosz geodecki</p>
          <p>With Next.js 13 by Vercel</p>
          <div className='h-8'></div>
          <p>{"Please don't take this project seriously."}</p>
          <div className='h-8'></div>
          <p>Any opinions presented here are obviously fake and any reseblance to any person, application or website, living or dead is purely coincidential.</p>
        </div>
        <ul className='p-8 text-slate-800 grid grid-cols-3 list-disc'>
          <div className=' col-span-full text-lg mb-2 text-center'>
            People that helped me:
          </div>
          <li className='hover:underline cursor-pointer'>Lorem, ipsum.</li>
          <li className='hover:underline cursor-pointer'>Nisi, quas.</li>
          <li className='hover:underline cursor-pointer'>Commodi, mollitia?</li>
          <li className='hover:underline cursor-pointer'>Autem, perferendis!</li>
          <li className='hover:underline cursor-pointer'>Excepturi, harum.</li>
          <li className='hover:underline cursor-pointer'>Voluptas, odio.</li>
          <li className='hover:underline cursor-pointer'>A, velit.</li>
          <li className='hover:underline cursor-pointer'>Ut, obcaecati.</li>
          <li className='hover:underline cursor-pointer'>Nisi, alias.</li>
          <li className='hover:underline cursor-pointer'>A, quaerat.</li>
          <li className='hover:underline cursor-pointer'>Fugiat, perspiciatis?</li>
          <li className='hover:underline cursor-pointer'>Quos, ducimus!</li>
          <li className='hover:underline cursor-pointer'>Maxime, enim.</li>
          <li className='hover:underline cursor-pointer'>Vero, quo!</li>
          <li className='hover:underline cursor-pointer'>Reprehenderit, nihil.</li>
          <li className='hover:underline cursor-pointer'>Molestiae, non.</li>
          <li className='hover:underline cursor-pointer'>Dolorem, ad.</li>
          <li className='hover:underline cursor-pointer'>Porro, minima.</li>
          <li className='hover:underline cursor-pointer'>Nihil, ea.</li>
          <li className='hover:underline cursor-pointer'>Odio, deleniti.</li>
          <li className='hover:underline cursor-pointer'>Fuga, nihil?</li>
          <li className='hover:underline cursor-pointer'>Reprehenderit, itaque.</li>
          <li className='hover:underline cursor-pointer'>At, accusantium.</li>
          <li className='hover:underline cursor-pointer'>Molestiae, tempora?</li>
          <li className='hover:underline cursor-pointer'>Debitis, sunt.</li>
          <li className='hover:underline cursor-pointer'>Autem, atque.</li>
          <li className='hover:underline cursor-pointer'>Similique, eligendi.</li>
          <li className='hover:underline cursor-pointer'>Et, veritatis?</li>
          <li className='hover:underline cursor-pointer'>Temporibus, facere.</li>
          <li className='hover:underline cursor-pointer'>Quis, laborum.</li>
          <li className='hover:underline cursor-pointer'>Harum, a.</li>
          <li className='hover:underline cursor-pointer'>Qui, necessitatibus.</li>
        </ul>
      </div>
    </div>
  )
}
