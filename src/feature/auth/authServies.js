import axios from "axios"

const API_Url="/api/user"

 const register =async(userdata)=>{
     const response= await axios.post(API_Url+"/register", userdata)
     localStorage.setItem("user",JSON.stringify(response.data))
     return response.data
 }

 const login =async(userdata)=>{
    const response= await axios.post(API_Url+"/login", userdata)
    localStorage.setItem("user",JSON.stringify(response.data))
    return response.data
}


 const AuthServies={
    register,
   login
   }
   export default AuthServies