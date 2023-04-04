import Image from 'next/image';
import React from 'react'

const EventsCatPage = ({data}) => {
  return (
    <div>
      <h1>Events in London</h1>
      <div>
        {data.map(event =>(
          <a key={event.id} href={`/events/${event.city}/${event.id}`}>
            <Image src={event.image} alt={event.title} width={300} height={200}/>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}

export default EventsCatPage;

export async function getStaticPaths(){
  const {events_categories} = await import('/data/data.json');
  const allPaths = events_categories.map(event=>{
    return{
      params:{
        cat: event.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context){
  const id = context?.params.cat;
  const {allEvents} = await import('/data/data.json');

  const data = allEvents.filter(event => event.city === id);
  return {props: {data}}
}
