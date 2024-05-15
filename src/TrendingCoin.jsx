import React from 'react'
 import Grid from "@mui/material/Grid"
import CoinCard from './CoinCard'
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { coin } from './feature/Coin/CoinSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router';
const TrendingCoin = () => {
   
const navigate=useNavigate()

const [trending,setTrending]=useState([])
       const {user}=useSelector((state=>state.auth))
    const fetchCoin=async()=>{
        const response=await fetch(`https://api.coingecko.com/api/v3/search/trending`)
        const data= await response.json()
       setTrending(data.coins)
    }

    useEffect(()=>{
        fetchCoin()
        if(!user)
        {
            navigate('/login')
        }
    },[user])
  return (
    <>
    <Typography variant='h3' sx={{textAlign:"center",color:"black"}}>
    TrendingCoin
    </Typography>
    
<Grid container spacing={2}>
{
   trending.map((coin)=><CoinCard key={coin.item.coin_id} coin={coin.item}/>)
}

</Grid>
</>
)
}
 
export default TrendingCoin