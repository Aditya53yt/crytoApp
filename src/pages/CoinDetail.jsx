import { Card, CardContent, CardMedia, Container, LinearProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const CoinDetail = () => {
   const params=useParams()
   const [coin,setCoin]=useState(null)
            

   const fetchCoin=async()=>{
      const response= await fetch(`https://api.coingecko.com/api/v3/coins/${params.id}`)
      const data= await response.json()
    setCoin(data)
   }
    useEffect(()=>{

        fetchCoin()
    }
    ,[])
   console.log(coin?.name)
   if(!coin)
   {
    return(
<Container sx={{padding:"20px 0px"}}>
    <LinearProgress/>
</Container>
    )
   }
  return (
<Container sx={{padding:"20px 0px"}}>
<Card sx={{padding:"20px 0px" ,width:"800px"}}>
    <CardContent>
        <CardMedia   sx={{ height: 140 }} image={coin?.image?.large}>

        </CardMedia>
        <Typography variant='h5' gutterBottom>
          name:{coin?.name}
        </Typography>
        <Typography variant='h5'gutterBottom>
        symbol:{coin?.symbol}
        </Typography>
        <Typography variant='h5' gutterBottom>
          price:  ${coin?.market_data?.current_price?.usd}
        </Typography>
        <Typography variant='body1'gutterBottom>
        description:{coin?.description.en}
        </Typography>
    </CardContent>
</Card>
</Container>
  )
}

export default CoinDetail;