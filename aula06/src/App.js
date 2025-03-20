import React, { useState } from 'react';
import axios from 'axios'
import Filho from './Filho';

const App = () => {
  //API
  const Buscar = async () => {
    const url= "http://viacep.com.br/ws/01001000/json/"
    await axios.get( url )
        .then(retorno =>{
          console.log(retorno.data)
        })
        .catch( erro => {

        })

          console.log("oi")
  }
  return (
    <div> <input type = 'button' value= 'buscar' onClick={() =>Buscar()}/>

    </div>
  )
}

export default App;
