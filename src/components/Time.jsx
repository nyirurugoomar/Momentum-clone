import React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import {TimeContainer,TimeStamp,Greeting} from './TimeStyles'


const Time = () => {
    let today = new Date()

    let greeting = () =>{
        if(today.getHours() >=5 && today.getHours < 11){
            return 'Good Morning, Omar'
        }else if(today.getHours() >=11 && today.getHours() <17){
            return 'Good Afternoon, Omar'
        }else if(today.getHours() >=17 && today.getHours() < 24){
            return 'Good Evening, Omar'
        }else{
            return 'Your not on Earth'
        }

    }

  return (
    <TimeContainer>
        <TimeStamp><Moment format='LT'></Moment></TimeStamp>
         <Greeting>{greeting()}.</Greeting>
     </TimeContainer>
  )
}

export default Time