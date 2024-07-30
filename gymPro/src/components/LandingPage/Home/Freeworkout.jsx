import { programs } from '../../../utils/util1'
import Button from '../../ui/Button'

const Freeworkout = () => {

  return (
    <div className='sm:ml-0 mt-8 ml-5 sm:p-3'>
        <h1 className='sm:text-2xl text-4xl font-bold'>Free Workout Programs</h1>
        <ul className='lg:grid sm:grid-cols-2 sm:gap-3 sm:p-3 lg:grid-cols-3 lg:gap-2 flex gap-14 xl:gap-10 p-14'>
          {programs.map(program => <li key={program.title}>
              <div className='sm:mb-10 lg:mb-10 w-workOutcardW h-workOutcardH relative align-middle'>
                <h1 className='sm:bottom-60 text-2xl font-bold -rotate-90 absolute bottom-44'>{program.title}</h1>
                <img className='sm:w-[10.265rem] sm:h-[20.87rem] w-workOutcardW h-workOutImgH opacity-30 mb-10' src={program.img} alt="trainer working out" loading='lazy' />
                <Button className="ml-10"  intent="secondary" size="medium" roundness="pill" classes="space">Start Today</Button>
              </div>
          </li>)}
        </ul>
    </div>
  )
}

export default Freeworkout