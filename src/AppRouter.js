import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Tabla from './Tabla';


export const App = () => {
  return (
    <Routes>
        <Route path="/" element ={<Register/>}/>
        <Route path="/tabla" element ={<Tabla/>}/>
        
    </Routes>
  )
}