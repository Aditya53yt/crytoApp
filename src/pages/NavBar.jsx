import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';
import logo from "../assets/images1.jfif"
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../feature/auth/AuthSlice';
const NavBar = () => {

   const {user}= useSelector((state)=>state.auth)
        const dispatch=useDispatch() 
        
        
 const handleLogout=()=>{
   dispatch(logout())
 }



  return (
  <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" sx={{background:"black" }}>
        <Toolbar variant="dense">
         <img src={logo} alt=""style={{width:"60px" ,borderRadius:"100px",height:"60px"}}/>

         <Typography variant="h6" color="inherit" component="div"sx={{color:"white",flexGrow:1}}>
       <Link to={'/'} style={{textDecoration:"none", color:'orange'}}>
          crypto Coins
       </Link>
        </Typography>
       <span>
     {
      user? (
        
   
       <Button variant='contained' sx={{backgroundColor:"red"}} onClick={handleLogout}>logOut <LogoutIcon/></Button>
     
     ):
     <>
     <Link  to={'/register'}>   <Button variant='contained' sx={{backgroundColor:"green" }}>register<PersonIcon /> </Button></Link> 
     <Link to={'/login'}>  <Button variant='contained' sx={{backgroundColor:"grey" ,margin:'0pc 20px'}}>Login <LoginIcon /> </Button></Link> 
</>
     }
           
    
       </span>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar