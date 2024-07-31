import React from 'react'
import { advancePrograms } from '../../../utils/data'
import Courasel from '../../ui/Courasel'

const Advance = () => {

  return (
    <div className='gap-4 mt-4 mb-4 pl-5'>
      <h3 className='text-4xl font-bold mb-5'>Moderate to Advance</h3>
      <p className='text-sm mb-5'>If you're looking for something that pushes you a little harder, try any of these moderate to advanced challenges to help you
      progress further.</p>
      <p className='w-[163px] h-[49px] border-2 border-btnColor-base text-center p-2 mb-5'>2008+ People Tried</p>
      <div className='p-4'>
        <Courasel props={advancePrograms} />
      </div>
    </div>
  )
}

export default Advance