import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { responsive } from '../../utils/data'
import Programs from './Programs'



const Courasel = ({props}) => {


  return (
    <Carousel responsive={responsive}>
      {props.map(props => <Programs props={props} key={props.id}/>)}
    </Carousel>
  )
}

export default Courasel