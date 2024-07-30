import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./pages/RootLayer"
import Home from "./pages/Home"
import About from "./pages/About"
import WorkoutProgram from "./pages/WorkoutProgram"
import Recipes from "./pages/Recipes"
import Store from "./pages/Store"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

const router = createBrowserRouter([
  { path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element:<Home />},
      {path: 'about', element: <About />},
      {path: 'workout-program', element: <WorkoutProgram/>,
      children: [
        {path: ':id'},
      ]
      },
      {path: 'recipes', element: <Recipes />},
      {path: 'store', element: <Store />},
      {path: 'login', element: <Login />},
      {path: 'signup', element: <Signup />},
    ]
  } ,
])

export default function App() {
  return (
    <RouterProvider router={router} />   
  )
}
