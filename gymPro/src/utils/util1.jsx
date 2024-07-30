import wk1 from "../components/assets/workoutImage1.png";
import wk2 from "../components/assets/workoutImage2.png";
import wk3 from "../components/assets/workoutImage3.png";
import shirt from "../components/assets/shirt.png";
import bag from "../components/assets/bag-top.png";
import bottle from "../components/assets/water-bottle.png";
import user1 from "../components/assets/user1.png"
import users from "../components/assets/users.webp"
import maleInstructor1 from "../components/assets/male-gymInstructor.webp"
import maleInstructor2 from "../components/assets/male-Instructor2.webp"
import femaleInstructor from "../components/assets/female-Instructor.webp"
import femaleInstructor2 from "../components/assets/female-Instructor2.jpeg"
import gymclass from "../components/assets/gym-class.jpeg"
import femaleInstructor3 from "../components/assets/female-Instructor3.webp"


  export const pages = [
    {link: "", label: "Home"},
    {link: "about", label: "About"},
    {link: "workout-program", label: "Workout Programs"},
    {link: "recipes", label: "Recipes"},
    {link: "store", label: "Store"},
    {link: "login", label: "Login"},
    {link: "signup", label: "Signup"}
  ]

  export const programs = [
    {title: "Beginer Friendly", img: wk3},
    {title: "Moderate to Advance", img: wk2},
    {title: "Weight Loss", img: wk1},
    {title: "No Equipment", img: wk2},
    {title: "Strength Training", img: wk2},
  ]

  export const products = [
    {name: "Bag", img: bag},
    {name: "Shirt", img: shirt},
    {name: "Bottle", img: bottle},
    {name: "Top", img: shirt}
]

export const gymImages = [
  {name: "trainer", img: user1},
  {name:"trainers", img: users},
  {name: "male instructor", img: maleInstructor1},
  {name: "female instructor", img: femaleInstructor},
]

export const gymImages2 = [
  {name:"male trainer", img: maleInstructor2},
  {name:"fitness class", img: gymclass},
  {name:"female trainer", img: femaleInstructor2},
  {name:"coach", img: femaleInstructor3},
]