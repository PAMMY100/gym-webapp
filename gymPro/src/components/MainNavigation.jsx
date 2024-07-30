import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../components/assets/logo.png'
import { pages } from '../utils/util1'


export const MainNavigation = () => {
  return (
    <header className='sm:mx-2 sm:bg-blue-200 sm:h-[150px] sm:mt-0 sm:relative flex justify-between mx-10 h-24 items-center'>
      <div>
        <img className='sm:w-14 sm:h-14 w-20 h-20' src={logo} alt="gym logo" />
      </div>
      <nav className='sm:hidden flex'>
        <ul className='flex justify-between'>
          {
            pages.map(page => <li key={page.link}>
              <NavLink
                end
                to={page.link}
                className={
                ({ isActive }) => (isActive
                  ? 'underline border-current text-btnColor-base'
                  : '')
                }
              >
                <h6 className="text-base transition text-xl mr-3.5 hover:text-btnColor-hover">
                  {page.label}
                </h6>
              </NavLink>
            </li>)
          }
        </ul>
      </nav>
      <nav className=' h-[280px] bg-btnColor-active absolute right-0 z-10 -bottom-[12.625rem]  hidden'>
        <ul className='flex flex-col items-center gap-2'>
          {
            pages.map(page => <li key={page.link}>
              <NavLink
                end
                to={page.link}
                className={
                ({ isActive }) => (isActive
                  ? 'underline border-current text-primary'
                  : 'text-btnColor-base')
                }
              >
                <h6 className="text-primary transition text-2xl font-bold mr-3.5 hover:text-secondary">
                  {page.label}
                </h6>
              </NavLink>
            </li>)
          }
        </ul>
      </nav>
    </header>
  )
}

{/* <li className='text-base transition text-xl mr-3.5 hover:text-btnColor-hover active:underline'><Link to="/">Home</Link></li>
          <li className='text-base transition text-xl mr-3.5 hover:text-btnColor-hover'><Link to="about">About</Link></li>
          <li className='text-base transition text-xl mr-3.5 hover:text-btnColor-hover'><Link to="workout-programs">Workout Programs</Link></li>
          <li className='text-base transition text-xl mr-3.5 hover:text-btnColor-hover'><Link to="recipes">Recipes</Link></li>
          <li className='text-base transition text-xl mr-3.5 hover:text-btnColor-hover'><Link to="store">Store</Link></li>
          <li className='text-base transition text-xl mr-3.5 hover:text-btnColor-hover'><Link to="login">Login</Link></li>
          <li className='text-base transition text-xl mr-3.5 hover:text-btnColor-hover'><Link to="signup">Signup</Link></li> */}