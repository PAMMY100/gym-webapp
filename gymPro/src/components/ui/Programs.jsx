import React from 'react'
import time from '../assets/time.png';
import cal from '../assets/calender.png';

const Programs = ({props}) => {

  return (
    <div className='w-[269px] h-[328px] relative '>
      <img className='w-[200px] h-[288px] rounded-[50px]' src={props.img} alt={props.program} />
      <div className='w-[157px] h-[58px] absolute bottom-16 left-[8%] bg-cardFg rounded-lg'>
        <div className='flex gap-2 mt-2 ml-2'>
          <p className='bg-btnColor-base rounded-md text-xs text-black flex justify-center'><img className='w-2 h-2 m-1' src={cal} alt="calendar" />{props.days}</p>
          <p className='bg-btnColor-base rounded-md text-xs text-black flex justify-center'><img className='w-2 h-2 m-1' src={time} alt="time" />{props.duration}</p>
        </div>
        <p className='text-sm ml-2 mt-2'>{props.program}</p>
      </div>
    </div>
  )
}

export default Programs;