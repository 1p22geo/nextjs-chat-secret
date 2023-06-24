import './globals.css'
import { Inter } from 'next/font/google'
export const revalidate = false


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SkyChat',
  description: 'The most modern chat app so far',
}


export default async function RootLayout(props: {
  children: React.ReactNode
}) {

  // await checkCookie()

  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}
        </body>
    </html>
  )
}
