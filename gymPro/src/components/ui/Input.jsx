
const Input = ({type, name, placeholder, classes}) => {

  return (
    <input className={`${classes} w-[450px] h-[80px] bg-primary text-sm text-white rounded-[40px] mb-8 border-[1px] border-btnColor-base px-4`} type={type} id={name} name={name} placeholder={placeholder} required/>
  )
}

export default Input