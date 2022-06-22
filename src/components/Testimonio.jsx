import React from 'react'
import '../styles/Testimonio.css'
import data from '../data/testimonios'


const Testimonio = () => {

  const { testimonios } = data
  
  return ( 
    <>
      {testimonios.map(item=>{
        return(
        <div className='contenedor-testimonio'>
          <img 
        className='imagen-testimonio' 
        src={item.imagen}
        alt={item.alt} />

        <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'><strong>{item.nombre}</strong> in {item.pais}</p>
            <p className='cargo-testimonio'>{item.cargo} at <strong>{item.empresa}</strong></p>
            <p className='texto-testimonio'>"{item.testimonio}"</p>
        </div>
        </div>
        )
      })}
    </>
  )
}
export default Testimonio