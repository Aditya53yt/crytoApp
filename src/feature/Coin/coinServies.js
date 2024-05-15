  export const fetchCoin=async(coindata)=>{
    const response=await fetch(`https://api.coingecko.com/api/v3/search/trending`)
    const data=response.json(coindata)
    console.log(data)
  }