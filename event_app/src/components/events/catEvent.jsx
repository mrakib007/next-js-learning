import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CatEvent = ({data,pageName}) => {
  return (
    <div>
      <h1>Events in {pageName}</h1>
      <div>
        {data.map((event) => (
          <Link key={event.id} href={`/events/${event.city}/${event.id}`}>
            <Image
              src={event.image}
              alt={event.title}
              width={300}
              height={200}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CatEvent
