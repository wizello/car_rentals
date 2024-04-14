"use client";
import { CustomButton } from '@/components'
import React, { useState } from 'react'


const SignUp = () => {
  // controlled forms
  // DOM: js, document.getElementById
  // VDOM: layer on top of the DOM

  // State, Props, Lifting up the state, functions as props, controlled forms, 

  const [data, setdata] = useState({
    username: "",
    email: "",
    password: ""
  })



  const handlesignup = async () => {
    // document.getElementByID

    const options =  {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      }
    };

    const response = await fetch("/api/signup", options);
    console.log(response)

    console.log("submitted" , data)
  }

  return (
    <div className='mt-10 flex justify-center'>
      <input type="text" placeholder='username' value={data.username} onChange={(e) => setdata({ ...data, username: e.target.value })} />
      <input type="email" placeholder='email' value={data.email} onChange={(e) => setdata({ ...data, email: e.target.value })} />
      <input type="password" placeholder='password' value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })} />
      <CustomButton title='signup' btnType="button" handleClick={handlesignup} />
    </div>

  )
}

export default SignUp