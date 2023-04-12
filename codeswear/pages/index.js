import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>CodesWear.com - Wear The Code</title>
        <meta name='description' content="CodesWear.come - Wear The Code." />
        <link rel="icon" href="logo.png" />
      </Head>
      
      <Navbar/>
      <div>
        <img src="photo1.jpg" alt="" srcset="" />
      </div>
      <Footer/>
    </div>
  )
}
