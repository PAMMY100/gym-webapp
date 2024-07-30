import React from 'react'
import Hero from '../components/LandingPage/Home/Hero';
import Freeworkout from '../components/LandingPage/Home/Freeworkout';
import Product from '../components/LandingPage/Home/Product';
import Gallery from '../components/LandingPage/Home/Gallery';
import Recipes from '../components/LandingPage/Home/Recipes';

const Home = () => {
  return (
    <div>
      <Hero />
      <Freeworkout />
      <Product />
      <Gallery />
      <Recipes />
    </div>
  )
}

export default Home;
