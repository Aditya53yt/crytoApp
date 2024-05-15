import { configureStore } from "@reduxjs/toolkit";
 import coinReducer from "./Coin/CoinSlice"
 import AuthReducer from "./auth/AuthSlice"
const store=configureStore({
    reducer:{
        coin:coinReducer,
        auth:AuthReducer
    }
})
export default store