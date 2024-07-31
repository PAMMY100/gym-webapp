import React from 'react'
import Beginer from '../components/LandingPage/WorkoutPrograms/Beginer';
import WeightLoss from '../components/LandingPage/WorkoutPrograms/WeightLoss';
import Strenght from '../components/LandingPage/WorkoutPrograms/Strenght';
import Advance from '../components/LandingPage/WorkoutPrograms/Advance';
import Freeworkout from '../components/LandingPage/Home/Freeworkout';

const WorkoutProgram = () => {
  return (
    <>
      <Freeworkout />
      <Beginer />
      <Advance />
      <WeightLoss />
      <Strenght />
    </>
  )
}

export default WorkoutProgram;
