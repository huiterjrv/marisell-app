import React from 'react'
import './styles.css'

function Written ({ written }) {

    return <>
        <div className='box'>
            <h3>{written.titulo}</h3>
            <div className='box-written'>
                <p>{written.texto}</p>
            </div>
            <p>{written.capitulo? `Capitulo: ${written.capitulo}`:''} Genero: {written.categoria.map(e => e.genero)}</p>
        </div>
    </>
}

export default Written