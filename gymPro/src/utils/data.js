import img29 from "../components/assets/image29.png";
import img27 from "../components/assets/image27.png";
import img28 from "../components/assets/image28.png";
import img42 from "../components/assets/image42.png";
import img30 from "../components/assets/image30.png";
import img38 from "../components/assets/image38.png";
import img41 from "../components/assets/image41.png";
import img31 from "../components/assets/image31.png";
import img32 from "../components/assets/image32.png";
import img43 from "../components/assets/image43.png";
import img33 from "../components/assets/image33.png";
import img34 from "../components/assets/image34.png";
import img35 from "../components/assets/image35.png";
import img39 from "../components/assets/image39.png";
import img36 from "../components/assets/image36.png";
import img40 from "../components/assets/image40.png";
import img44 from "../components/assets/male-Instructor2.webp";
import img45 from "../components/assets/gym-equip5.jpeg";
import img46 from "../components/assets/female-Instructor2.jpeg";



export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export const beginerPrograms = [
  {id: 1, program: "Get Abs Challenge", img: img29, duration: "20-40 mins", days: "14 days"},
  {id: 2, program: "Get Abs Challenge", img: img27, duration: "20-40 mins", days: "14 days"},
  {id: 3, program: "Get Abs Challenge", img: img28, duration: "20-40 mins", days: "14 days"},
  {id: 4, program: "Get Abs Challenge", img: img42, duration: "20-40 mins", days: "14 days"},
  {id: 5, program:"Get Abs Challenge", img: img30, duration: "20-40 mins", days: "14 days"},
]


export const advancePrograms = [
  {id: 1, program: "Advance Workouts", img: img38, duration: "20-40 mins", days: "14 days"},
  {id: 2, program: "Advance Workouts", img: img41, duration: "20-40 mins", days: "14 days"},
  {id: 3, program: "Advance Workouts", img: img31, duration: "20-40 mins", days: "14 days"},
  {id: 4, program: "Advance Workouts", img: img32, duration: "20-40 mins", days: "14 days"},
  {id: 5, program: "Advance Workouts", img: img43, duration: "20-40 mins", days: "14 days"},
]

export const weightLoss = [
  {id: 1, program: "Weight Loss", img: img33, duration: "20-40 mins", days: "14 days"},
  {id: 2, program: "Weight Loss", img: img34, duration: "20-40 mins", days: "14 days"},
  {id: 3, program: "Weight Loss", img: img35, duration: "20-40 mins", days: "14 days"},
  {id: 4, program: "Weight Loss", img: img39, duration: "20-40 mins", days: "14 days"},
  {id: 5, program: "Weight Loss", img: img38, duration: "20-40 mins", days: "14 days"},
]

export const strengthTraining = [
  {id: 1, program: "Strength Training", img: img36, duration: "20-40 mins", days: "14 days"},
  {id: 2, program: "Strength Training", img: img40, duration: "20-40 mins", days: "14 days"},
  {id: 3, program: "Strength Training", img: img44, duration: "20-40 mins", days: "14 days"},
  {id: 4, program: "Strength Training", img: img45, duration: "20-40 mins", days: "14 days"},
  {id: 5, program: "Strength Training", img: img46, duration: "20-40 mins", days: "14 days"},
]