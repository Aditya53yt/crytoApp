import { Avatar, Box, Button, Container, CssBaseline, Grid, LinearProgress, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginUser } from '../feature/auth/AuthSlice';
import Swal from 'sweetalert2';
const Login = () => {

 const dispatch =useDispatch()
 const navigate=useNavigate()


     const {isLoading,isSuccess,isError, user,message}=useSelector((state)=>state.auth)

  const[formdata,setFormData]=useState({
    email:'',
    password:""
  })
const{email,password}=formdata

const handleChange=(e)=>{
  setFormData({
    ...formdata,
    [e.target.name]:e.target.value

 })
}
const handleSubmit=(e)=>{
 e.preventDefault()
dispatch(loginUser(formdata))
}

   useEffect(()=>{

if(user){
  navigate('/')
}
if(isError||message){
  Swal.fire({
    title:message,
    icon: "error"
  });
}

   },[user,isError,message])
   if(isLoading)
   {
    return(
      <Container sx={{padding:'20px'}}>
        <LinearProgress/>
      </Container>
    )
   }

          return (
           
              <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                  item
                  xs={false}
                  sm={4}
                  md={7}
                  sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                  <Box
                    sx={{
                      my: 8,
                      mx: 4,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                    <Box component="form"  onSubmit={handleSubmit} noValidate  sx={{ mt: 1 }}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={handleChange}
                        value={email}
                  
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                       onChange={handleChange}
                       value={password}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                     
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          
                        </Grid>
                        <Grid item>
                        
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
  )
}

export default Login