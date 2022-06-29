import React from 'react'

const ButtonCounter = ( {texto, esBotonDeClic, manejarClic }) => {
  return (
    <div>
        <button
            className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
            onClick={manejarClic}>
            {texto}
        </button>
    </div>
  )
}

export default ButtonCounter