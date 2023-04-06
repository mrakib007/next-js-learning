import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message,setMessage] = useState('');

  const onSubmit = async (event) =>{
    event.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!emailValue.match(validRegex)){
      setMessage('Please Introduce a Correct Email Format.')
    }
    try{
      //POST fetch request
      //body emailValue and the eventId
      const response = await fetch('/api/email-registration',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email:emailValue,eventId})
      });
      if(!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    }catch(error){
      console.log(error + " " + "Error")
    }
  }
  return (
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit}>
        <label htmlFor="Get's Started For This Event"></label>
        <input ref={inputEmail} type="email" name="" id="email" placeholder="please insert your email here" />
        <button type="submit">Submit</button>
      </form>
      {message}
    </div>
  );
};

export default SingleEvent;
