import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <img src="" alt="" />
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/about-us">About Us</a>
        </nav>
      </header>
      <main className={styles.main}>
        {
          data?.map(event => <a key={event.id} href={`/events/${event.id}`}>
            <Image width={300} height={200} alt={event.title} src={event.image}/><h2>{event.title}</h2>
            <p>{event.description}</p></a>)
        }
      </main>
    </>
  )
}

export async function getServerSideProps(){
  const {events_categories} = await import('/data/data.json');
  return {
    props:{
      data: events_categories,
    },
  };
}