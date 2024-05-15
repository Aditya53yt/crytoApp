import React from 'react'
import {Grid,Card, Typography,CardMedia,CardActions,Button} from '@mui/material'
 import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
const CoinCard = ({coin}) => {
  return (
   <Grid item xs={12} md={6} lg={4} >  
     <Card sx={{ background:'black'}}>
      <CardMedia
        sx={{ height: 140 }}
        image={coin.large}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  color="orange">
          {coin.name}
        </Typography>
        <Typography variant="body2" color="orange" >
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
       
       <Link to={`/coin/${coin.id}`}> <Button variant='container' size="small" sx={{color:"orange"}}>Learn More</Button></Link>
      </CardActions>
    </Card>
  </Grid>
  )
}

export default CoinCard