import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const EventsPage = ({data}) => {
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

export default EventsPage;

export async function getStaticProps(){
  const {events_categories} = await import('/data/data.json');

  return{
    props:{
      data: events_categories,
    }
  }
}
