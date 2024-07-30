import React from 'react'

const ImageGrid = ({user}) => {

  return (
    <li key= {user.name}><img className='w-full h-[18.95rem] object-cover rounded-[3.125rem]' src={user.img} alt={user.name} loading='lazy'/></li>
  )
}

export default ImageGrid