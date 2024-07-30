import React from 'react'
import heroImage from '../../assets/hero.png'
import Button from '../../ui/Button';

const Hero = () => {
  return (
    <div className='flex sm:gap-8 lg:gap-10 xl:gap-24 ml-5 mt-4 sm:px-1 px-4'>
      <div className='flex flex-col gap-2'>
        <div className=''>
          <h2 className='sm:text-4xl xl:text-5xl'>make your</h2>
          <h1 className='lg:text-5xl xl:text-7xl font-bold mt-3'>BODY SHAPE</h1>
        </div>
        <p className='sm:w-[22rem] xl:max-w-xl mt-5 mb-5 text-lg'>Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. Adults who si</p>
        <p>
        <Button intent="primary" size="large" roundness="pill">Get Started</Button>
      </p>
      </div>
      <div className='sm:hidden'>
        <img className='max-h-heroH lg:mr-4 lg:w-[30.25rem] h-lgH xl:w-lgxW' src={heroImage} alt="gym equipments" loading='lazy'/>
      </div>
    </div>
  )
}

export default Hero;