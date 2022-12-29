import React,{useState,useEffect} from 'react'
import axios from 'axios'

const url= 'https://api.openweathermap.org/data/2.5/weather?q=dallas&units=imperial&appid=569adb4e6e9b390acf9c205013272156'

const Wether = () => {
    const [data, setData] = useState(null)

    
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            console.log(err)
            
        })

    },[])
    console.log(data)

   

    if(!data) return null;


  return (
    <div>
        <p>{data.main.temp.toFixed(0)}</p>
    </div>
  )
}

export default Wether