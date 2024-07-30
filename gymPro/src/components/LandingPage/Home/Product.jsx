import React from 'react'
import Button from '../../ui/Button'
import { products } from '../../../utils/util1'

const Product = () => {
  return (
    <div className='sm:px-5 sm:mt-2 px-20 flex flex-col gap-10 mt-8'>
      <div className='flex justify-between'>
        <h1 className='sm:text-sm lg:text-2xl text-3xl text-btnColor-base'>/// GET OUR MERCH</h1>
        <Button intent="secondary" size="large" roundness="pill">View All Products</Button>
      </div>
      <ul className='lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-30  flex gap-6 mt-40'>
        {products.map(product => <li key={product.name}>
          <div className='sm:h-[12.936rem] sm:w-[10.625rem] h-merchConH w-merchConW relative'>
          <div className='absolute w-merchConW mt-4 -top-40 mx-auto'>
              <img className='sm:h-[11.62rem] sm:w-[10.625rem] sm:ml-0 sm:mt-5 sm:mb-0 h-merchImgH w-merchImgW object-contain ml-5 mb-2' src={product.img} alt={product.name} loading='lazy'/>
              <p className='sm:mr-12 text-center font-bold text-lg'>{product.name}</p>
            </div>
            <div className='sm:w-[10.625rem] h-1/2 w-merchConW bg-cardFg bottom-0'></div>
          </div>
        </li> )}
      </ul>
    </div>
  )
}

export default Product

{/* <div className=' absolute z-3'>
              <img className='h-merchImgH w-merchImgW object-contain' src={product.img} alt={product.name} loading='lazy'/>
              <p className='text-center'>{product.name}</p>
            </div> */}