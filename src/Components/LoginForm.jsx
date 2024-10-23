import React, { useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState('youremail@gmail.com');
  const [message, setMessage] = useState('');
  function handleEmail(event) {
    let inputValue = event.target.value;
    setEmail(inputValue)

    let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if(!emailRegex.test(inputValue)){
      setMessage('Error! you have entered an invalid email');
    }else{
      setMessage("");
    }
  }
  return (
    <div className='p-6 text-center bg-slate-900 rounded-2xl'>
      <form>
        <h1>Login form</h1>
        <input type="text" placeholder='Enter your name' className='m-5 p-2'/>
        <br />
        <input className='m-5 p-2'type="text" placeholder='Enter your email' value={email} onChange={handleEmail}/>
        <h1>Your email is:{email}</h1>
        <h1 className='text-red-300'>{message}</h1>
      </form>
    </div>
  )
}

export default LoginForm