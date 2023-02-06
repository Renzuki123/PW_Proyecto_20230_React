import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import LoginPage from './Login/LoginPage';
import MainPage from './MainPage/MainPage';
import Req2 from './Req2/Req2';
import Restaurant from './Restaurantes/restaurant';
import Estado_pedido from './Restaurantes/estado_pedido';
import Registro_pedido from './Restaurantes/registro_pedido'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/PW_Proyecto_20230_React' element={ <MainPage/> } />
        <Route path='/PW_Proyecto_20230_React/Login' element={ <LoginPage/> } />
        <Route path='/PW_Proyecto_20230_React/Carrito' element={ <carrito/> } />
        <Route path='/PW_Proyecto_20230_React/Restaurantes/restaurant' element={ <Restaurant/> } />
        <Route path= '/PW_Proyecto_20230_React/Restaurantes/estado_pedido' element={ <Estado_pedido/>}/>
        <Route path='/PW_Proyecto_20230_React/Req2' element = {<Req2/>}/>
        <Route path='/PW_Proyecto_20230_React/Restaurantes/registro_pedido' element = {<Registro_pedido/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

//\Restaurantes\estado_pedido.jsx