import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './Login/LoginPage';
import MainPage from './MainPage/MainPage';
import App2 from './Carta/App2'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={ <MainPage/> } />
        <Route path='/Login' element={ <LoginPage/> } />
        <Route path='/Carrito' element={ <carrito/> } />
        <Route path='/restaurant' element={ <restaurant/> } />
        <Route path='/MarcosBistro' element = {<App2/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);