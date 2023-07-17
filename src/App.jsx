import { useState } from 'react';
import {useEffect} from 'react';
import './App.css';
import Navm from './components/Navm';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Shop from './views/Shop';
import Cart from './views/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [count, setcount] = useState(0)
  

  return (
    <>
      <Navm />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/shop' element={<Shop />} />
        <Route children path='/cart' element={<Cart />} />
      </Routes>





    </>
  )
};

export default App;
