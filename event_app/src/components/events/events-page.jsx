import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const AllEvents = ({data}) => {
  return (
    <div>
      <h1>Event Page</h1>
      <div>
        {data.map(event => (
          <Link key={event.id} href={`/events/${event.id}`}>
            <Image src={event.image} alt={event.title} width={300} height={200}/>
            <h2>{event.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllEvents;
