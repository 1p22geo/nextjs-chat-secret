import './globals.css'
import { Inter } from 'next/font/google'
export const revalidate = false


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SkyChat',
  description: 'The most modern chat app so far',
}

export default function RootLayout(props: {
  children: React.ReactNode,
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {props.children}
        {props.modal}
        </body>
    </html>
  )
}
