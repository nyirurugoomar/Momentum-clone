import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {QuoteContainer,Text} from './QuoteStyles'

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
    <QuoteContainer>
        <Text>" {quotes} "</Text>
        <Text>-{author}</Text>
    </QuoteContainer>
  )
}

export default Quote