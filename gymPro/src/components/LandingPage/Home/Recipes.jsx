import React from 'react'
import Button from '../../ui/Button'
import proteinPack from '../../assets/protein-pack-meal.png';
import arrow from '../../assets/arrow.png';
import highProtein from '../../assets/high-protein-Recipes.png';
import lowCarb from '../../assets/low-carb.png';
import diaryFree from '../../assets/diary-free.png';
import vegetarianMeal from '../../assets/vegetarian-recipes.png';

const meals = [
  {meal: "High Protein Recipes", img: highProtein},
  {meal: "Low Carb Recipes", img: lowCarb},
  {meal: "Diary Free Recipes", img: diaryFree},
  {meal: "Vegetarian Meal", img: vegetarianMeal},
]

const Recipes = () => {

  return (
    <div className='sm:p-5 mt-16 p-20'>
      <div className='flex justify-between mb-8'>
        <h1 className='sm:text-lg lg:text-2xl text-[2.25rem] text-btnColor-base font-bold'>/// Recipes</h1>
        <Button intent="secondary" size="large" roundness="pill">View More Protein</Button>
      </div>
      <div className='sm:block flex lg:gap-20 items-center gap-14'>
        <div className='lg:block flex gap-8'>
          <img className='sm:h-[14.5rem] sm:w-[13.26rem] lg:h-[20.5rem] lg:w-[15.25rem] h-[29.5rem] w-[23.063rem] rounded-[50px]' src={proteinPack} alt="a bowl full of protein diet" loading='lazy'/>
          <div className='flex flex-col py-[5rem] gap-5 max-w-[300px]'>
            <h3 className='font-bold text-[1.25rem] '>Protein-packed power bowl</h3>
            <p>A colorful protein-packed power bowl filled with flavorful, meaty grilled satay tofu and an array of vibrant veggies on a bed of fluffy quinoa. Completed with a healthy and delicious satay dipping sauce and crushed roasted peanuts. Delicious!</p>
            <Button intent="secondary" size="xl" roundness="pill">View Full Recipe <span className='inline'><img src={arrow} alt="a direction arrow" /></span></Button>
          </div>
        </div>
        <ul>
        {meals.map(meal => <li key={meal.meal}> 
          <div className='flex gap-[30px] justify-between items-center'>
            <img className='mb-4 w-[119px] h-[97px] rounded-lg object-cover' src={meal.img} alt={meal.meal} />
            <h3 className='font-bold text-left'>{meal.meal}</h3>
          </div>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Recipes