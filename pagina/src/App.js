import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Login from './componentes/Login';
import Tienda from './componentes/Inicio';
import Provider from './Contexto/Provider';
import Eventos from './componentes/Eventos';
import Carrito from './componentes/Carrito';
import Pedidos from './componentes/Pedidos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/' element={<Tienda/>}/>
            <Route path='/eventos' element={<Eventos/>}/>
            <Route path='/carro' element={<Carrito/>}/>
            <Route path='/pedidos' element={<Pedidos/>}/>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;