import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logoBreakingBad from '../../assets/img/break.svg' 
 
function Frase({frase}) {
  return (

    <div className="frase card container">
    <img src={logoBreakingBad} className="pt-5 mb-2" />
      <h1>"{frase.quote}"</h1>
      <p>---{frase.author}</p>
    </div>
  )
}

function BreakingBad() {

  const [frase, obtenerFrase] = useState({});

  const consultarAPI = async () => {
      const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');

      // console.log(resultado.data[0]);
      // agregar el resultado de la API al state; (similar a this.setState)
     obtenerFrase(resultado.data[0]);
  }

  // consulta a una rest api
  useEffect(
    () => {
      consultarAPI()
    }, []
  )
  // console.log(frase);

  return (
    <div className="container frases">
      <Frase 
        frase={frase}
      />
      <button
      className="btn btn-block btn-primary"
        onClick={consultarAPI}
      >Generar Nueva</button>
    </div>
  )
}

export default BreakingBad;