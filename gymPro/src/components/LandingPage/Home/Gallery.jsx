import React from 'react'
import ImageGrid from '../../ui/ImageGrid'
import { gymImages, gymImages2 } from '../../../utils/util1'


const Gallery = () => {
  return (
    <div className='sm:px-5 px-20'>
      <h1 className='sm:text-lg lg:text-2xl text-btnColor-base font-bold text-[2.25rem] mb-6'>/// Gallery</h1>
      <ul className="grid lg:grid-cols-2 grid-cols-image1 gap-[1.6rem] mb-11" >
        {gymImages.map((user) => <ImageGrid user={user} key={user.name}/>)}
      </ul>
      <ul className="lg:hidden grid grid-cols-image2 gap-[1.6rem]" >
        {gymImages2.map((user) => <ImageGrid user={user} key={user.name}/>)}
      </ul>
    </div>
  )
}

export default Gallery