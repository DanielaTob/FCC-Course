import React, { useState } from 'react'
import logo from '../assets/logo.png'
import '../styles/Counter.css';
import ButtonCounter from './ButtonCounter';
import Contador from './Contador';

const Counter = () => {

    const [numClics, setNumClics] = useState(0);

    const manejarClic = () => {
      setNumClics(numClics + 1); 
    }

    const reiniciarContador = () =>{
      setNumClics(0);
    }


  return (
    <div className='contenedor'>
    <div className='container-counter'>
        <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={logo}
        alt='Logo de freecodecamp'/>
        </div>
        <div className='contenedor-contador'>
        <Contador numClics={numClics} />
        <div className='container-botones'>
        <ButtonCounter
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <ButtonCounter
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
        </div>
        </div>
    </div>
    </div>
  )
}

export default Counter