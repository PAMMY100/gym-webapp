import React from 'react'
import smiley from '../../assets/smiley-emoji.png'
import trainer from '../../assets/femalewithBarbell.png'
import Button from '../../ui/Button'

const cardContent = [
  {content: "1000+ Being physically active can improve your brain health, help manage weight", img: smiley},
  {content: "1000+ Being physically active can improve your brain health, help manage weight", img: smiley},
  {content: "1000+ Being physically active can improve your brain health, help manage weight", img: smiley},
]

const AboutPage = () => {
  return (
    <div className='relative'>
      <img className='' src={trainer} alt="female trainer with barbell" loading='lazy' />
      <div className='absolute top-10 left-10 flex flex-col gap-6'>
        <h4 className='text-6xl leading-normal'>get more out of your</h4>
        <h1 className='text-6xl font-bold'>Fitness Journey</h1>
        <p className='text-xl'>Join the community to track your progress</p>
        <p className='w-[525px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>
        <Button intent="primary" size="large" roundness="pill">Create Account</Button>
      </div>
      <ul className='flex gap-8 absolute -bottom-28 mb-8 left-[15%]'>
        {cardContent.map((content, index )=> <li key={index}>
          <div className='w-[265px] h-[303px] bg-cardFg flex flex-col justify-center items-center gap-8 rounded-2xl'>
            <img className='w-[105px] h-[105px]' src={content.img} alt={content.content} />
            <p className='w-[177px]'>{content.content}</p>
          </div>
        </li>)}
      </ul>
    </div>
  )
}

export default AboutPage;
