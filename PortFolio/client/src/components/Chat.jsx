
import React, { useState } from 'react';

const Chat = () => {

  const [msg , setMsg]= useState('');

  return (
    <div>
      <div className="contactTitle" >
     </div>
    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72022703974!2d76.82493315398123!3d28.423160294893716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1691668600846!5m2!1sen!2sin" 
    width="100%" 
    height="350"
    style= {{border : "0"}} 
    loading="lazy"/>
    <form className='contactForm' action='https://formspree.io/f/mleyjnjr' method='post'>
      <h1 className='chathead'>Need Help? Drop Your Message..</h1>
      <input className='inputForm'  name='name' type='text' placeholder='Name....'/>
      <input className='inputForm'  name='email' type='email' placeholder='Email....'/>
      <input className='inputForm' style={{height:"5rem"}}  name='message' placeholder='Message....' />
      <button className='submitform' value={msg} type='submit' onClick={()=>setMsg('')}>Submit</button>
    </form>
    </div>
  ) 
}

export default Chat;