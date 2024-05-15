import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthServies from "./authServies";
     const userExist=JSON.parse(localStorage.getItem("user"))
const initialState={
    user:userExist?userExist:null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"someThing Went wrong"
}

 const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
    builder.addCase(registerUser.pending,(state,action)=>{
        state.isLoading=true
        state.isSuccess=false
        state.isError=false
    })
    .addCase(registerUser.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isSuccess=true
        state.isError=false
        state.user=action.payload
    })
    .addCase(registerUser.rejected,(state,action)=>{
        state.isLoading=false
        state.isSuccess=false
        state.isError=true
        state.message=action.payload
    }).addCase(logout.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isSuccess=true
        state.isError=false
        state.user=null
        state.message=""
    })
    .addCase(loginUser.pending,(state,action)=>{
        state.isLoading=true
        state.isSuccess=false
        state.isError=false
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isSuccess=true
        state.isError=false
        state.user=action.payload
    })
    .addCase(loginUser.rejected,(state,action)=>{
        state.isLoading=false
        state.isSuccess=false
        state.isError=true
        state.message=action.payload
    })
    

    }
 })
 export default AuthSlice.reducer

 export const registerUser=createAsyncThunk("FETCH/USER",async(userdata,thunkAPI)=>{
try {
    return await AuthServies.register(userdata)
} catch (error) {
    const message= error.response.data.message
    return thunkAPI.rejectWithValue(message)
}
 })
 export const logout=createAsyncThunk("LOGOUT/USER",async()=>{
    try {
        localStorage.removeItem('user')
    } catch (error) {
        console.log(error)
    }
     })


     //login user
     export const loginUser=createAsyncThunk("LOGIN/USER",async(userdata,thunkAPI)=>{
        try {
            return await AuthServies.login(userdata)
        } catch (error) {
            const message= error.response.data.message
            return thunkAPI.rejectWithValue(message)
        }
         })