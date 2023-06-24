import Link from 'next/link'
import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation';
export default async function Home() {
  redirect("/en")
  
}
