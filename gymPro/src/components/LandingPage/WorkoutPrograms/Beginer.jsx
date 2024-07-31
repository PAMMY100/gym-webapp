import React from 'react'
import Courasel from '../../ui/Courasel'
import { beginerPrograms } from '../../../utils/data'

const Beginer = () => {
  return (
    <div className='gap-4 mt-4 mb-4 pl-5'>
      <h3 className='text-4xl font-bold mb-5'>Beginer Friendly</h3>
      <p className='text-sm mb-5'>Looking to get started on your fitness journey? Try one of these beginner-friendly programs! These have shorter time commitments or have low-impact alternatives.</p>
      <p className='w-[163px] h-[49px] border-2 border-btnColor-base text-center p-2 mb-5'>1938+ People Tried</p>
      <div className='p-4'>
        <Courasel props={beginerPrograms} />
      </div>
    </div>
  )
}

export default Beginer