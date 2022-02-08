import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Paginas/Home'
import Contato from './Paginas/Contato';
import Promoções from './Paginas/Promoções';
import Destinos from './Paginas/Destinos';
export default function Colocar(){

    return(
<BrowserRouter>
<Routes>

<Route path="/" exact element={<Home/>} />
<Route path="/Contato" element={<Contato/>}></Route>
<Route path="/Promocoes" element={<Promoções/>}></Route>
<Route path="/Destino" element={<Destinos/>}></Route>
</Routes>
</BrowserRouter>

    );
}