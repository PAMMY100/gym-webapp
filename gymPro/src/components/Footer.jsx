import React from 'react'
import { Form } from 'react-router-dom'
import footerImg from './assets/trainer-squating.png'
import logo from './assets/logo.png'
import Input from './ui/Input'

const Footer = () => {

  return (
    <div className='sm:p-5 mt-8 p-20'>
      <div className=''>
        <h1 className='sm:text-lg lg:text-2xl text-[2.25rem] text-btnColor-base mb-6'>///Contact Us</h1>
        <p className='mb-16'>If you have any questions or need more information, feel free to reach out!</p>
      </div>
      <div className='flex justify-between gap-12'>
        <Form className='flex flex-col gap-2 sm:h-[294px] sm:w-[394px] h-[394px] w-[554px]'>
          <Input 
          type="text" 
          name="name" placeholder="Enter your name" classes="sm:w-[350px] lg:w-[380px]"
          />
          <Input 
          type="email" 
          name="email" 
          placeholder="xyz@example.com"
          classes="sm:w-[350px] lg:w-[380px]"
          />
          <textarea className='sm:w-[350px] lg:w-[380px] w-[450px] h-[150px] bg-primary text-sm text-white rounded-[40px] mb-8 border-[1px] border-btnColor-base p-4' name="message" id="message" rows="4" placeholder='Enter your message...' />
        </Form>
        <img className='sm:hidden lg:w-[350.2px] w-[503.43px] h-[350px] rounded-[50px] ' src={footerImg} alt="A female trainer squating" loading='lazy' />
      </div>
      <div className='flex flex-col justify-between gap-5 items-center'>
        <img className='sm:w-20 sm:h-20 w-40 h-40 ' src={logo} alt="gym logo" />
        <p className='sm:w-[300px] w-[700px] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus cumque iusto accusantium culpa repellat doloremque quisquam consequuntur vero odio autem!</p>
      </div>
    </div>
  )
}

export default Footer
