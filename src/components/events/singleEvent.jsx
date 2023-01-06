import Image from 'next/image'
import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';

export const SingleEvent = ({ data, pageName }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const enterEmail = async (e) => {
    e.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailValue.match(validEmailRegex)) {
      setMessage('Please submit a valid email address');
      return;
    }

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });

      if (!response.ok) throw new Error(`error: ${response.status}`);
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = '';
    } catch (error) {
      console.log('Error storing email ', error);
    }
  }

  return (
    <div className="single_event">
      <Image width={800} height={600} alt={data.title} src={data.image} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <form className="email_registration" onSubmit={enterEmail}>
        <label>Get registered for this event! </label>
        <input
          id='email'
          placeholder='Please enter email address here'
          ref={inputEmail}
        />
        <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  )
}