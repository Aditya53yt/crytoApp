import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCoin } from "./coinServies";

const CoinSlice=createSlice({
    name:'coin',
    initialState:{
    coin:{
        title:"",
        descreption:""
    }
    },
    reducers:{},

    extraReducers:(builder)=>{

    }


}) 
export default CoinSlice.reducer

  export const coin=createAsyncThunk("FETCH/COIN",async(coindata)=>{
return await fetchCoin(coindata)
  })