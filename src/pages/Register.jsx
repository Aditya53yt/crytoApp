import { Avatar, Box, Container, CssBaseline, Grid, TextField, Typography,Button, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { registerUser } from '../feature/auth/AuthSlice'
import { useNavigate } from 'react-router'

const Register = () => {
 const dispatch =useDispatch()
 const navigate= useNavigate()
    const [formdata,setFormData]=useState({
        name:"",
        email:"",
        password:'',
        password2:''
    })

 const {name ,email, password, password2} = formdata
  
 const {isLoading,isSuccess,isError,message,user}= useSelector((state)=>state.auth)


// function
 const handleChange=(e)=>{
 setFormData({
    ...formdata,
    [e.target.name]:e.target.value

 })
 }

 const handleSubmit=(e)=>{
   e.preventDefault()
 dispatch(registerUser(formdata))

   if(password!==password2)
   {
       Swal.fire({
           title: " invalid password?",
           text: "invalid password",
           icon: "error"
         });
   }
   setFormData({
    email:'',
    name:'',
    password:'',
    password2:''
   })
 }

 useEffect(()=>{
  if(user){
    navigate('/')
  }
  if(isError||message)
  {
    Swal.fire({
      title:message,
     
      icon: "error"
    });
  }
 },[user,isError,message])
 if(isLoading){
  return(
    <Container sx={{padding:"20px 0px"}}>
      <LinearProgress/>
    </Container>
  )
 }



  return (
    <Container  maxWidth="sm"   >
    <CssBaseline />
  
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
    
      </Avatar>
      <Typography component="h1" variant="h5">
       Register
      </Typography>
      <Box component="form" onSubmit={handleSubmit}  noValidate  sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}  >
            <TextField
              autoComplete="given-name"
              name="name"
             onChange={handleChange}
             value={name}
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={handleChange}
              value={email}
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              onChange={handleChange}
               value={password}
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password2"
              onChange={handleChange}
              value={password2}
              label="confirm Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
          
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
        Register
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            
          </Grid>
        </Grid>
      </Box>
      
    </Box> 
  

  </Container>
  )
}

export default Register