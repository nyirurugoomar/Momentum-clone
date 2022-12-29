import React,{useState,useEffect} from 'react'
import axios from 'axios'

const url='https://api.quotable.io/random'

const Quote = () => {
    const [quotes, setQuote] = useState(null)
    const [author, setAuthor]= useState('')
    
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setQuote(res.data.content)
            setAuthor(res.data.author)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
    if(!quotes) return null;
  return (
    <div>
        <p>" {quotes} "</p>
        <p>-{author}</p>
    </div>
  )
}

export default Quote