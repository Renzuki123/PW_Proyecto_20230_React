import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './Login/LoginPage';
import MainPage from './MainPage/MainPage';
import App2 from './Carta/App2';
import Restaurant from './Restaurantes/restaurant';
import estado_pedido from '.\Restaurantes\estado_pedido';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <MainPage/> } />
        <Route path='/Login' element={ <LoginPage/> } />
        <Route path='/Carrito' element={ <carrito/> } />
        <Route path='/Restaurantes/restaurant' element={ <Restaurant/> } />
        <Route path='/MarcosBistro' element = {<App2/>}/>
        <Route path='/Restaurantes/estado_pedido' element = {<estado_pedido/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

