
import React from 'react'

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from './pages/NavBar'
import TrendingCoin from './TrendingCoin'
import Register from './pages/Register'
import Login from './pages/Login'
import CoinDetail from './pages/CoinDetail'



const App = () => {
  return (
<Router>
  <NavBar/>
  <Routes>
    <Route path='/' element={<TrendingCoin/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/coin/:id' element={<CoinDetail/>}/>
  </Routes>
</Router>

  )
}

export default App