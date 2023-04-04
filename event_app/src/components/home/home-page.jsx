import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const HomePage = ({data}) => {
  return (
    <main>
        {
          data?.map(event => <Link key={event.id} href={`/events/${event.id}`}>
            <Image width={300} height={200} alt={event.title} src={event.image}/><h2>{event.title}</h2>
            <p>{event.description}</p></Link>)
        }
      </main>
  )
}

export default HomePage;
