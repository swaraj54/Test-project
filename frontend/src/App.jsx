import { useState } from "react";
import { Route, Routes} from 'react-router-dom';
import Addproduct from "./components/Addproduct";
import Allproducts from "./components/Allproducts";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        <Route path='/addproduct' element={<Addproduct />} />
        <Route path='/allproducts' element={<Allproducts />} />
      </Routes>
    </div>
  )
}

export default App;