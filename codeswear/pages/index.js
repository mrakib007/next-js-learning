import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>CodesWear.com - Wear The Code</title>
        <meta name='description' content="CodesWear.come - Wear The Code." />
        <link rel="icon" href="logo.png" />
      </Head>
      <div className="mx-4 bg-black">
        this is codesWear
      </div>
    </div>
  )
}
