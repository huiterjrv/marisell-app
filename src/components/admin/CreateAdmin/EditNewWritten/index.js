import React, { useContext } from 'react'

import ThemesCategoriesContext from 'context/ThemesCategoriesContext'

function EditNewWritten () {

    const { themes } = useContext(ThemesCategoriesContext)

    return <>
        <section>
            <label htmlFor='titel'>
                <h2>titulo</h2>
            </label>
            <input type='text' id='titel'  />
            <p>
                <label htmlFor='chapter' >
                    <h4>capitulo: </h4>
                </label>
                <input type='number' name='capitulo' id='chapter'  />
            </p>
            <h4>genero</h4>
            <div>
                {
                    themes.map( e => <p key={e._id}>{e.categoria}</p> )
                }
            </div>
            <h4>categorias</h4>
            <div>
                
            </div>
            <label htmlFor=''>
                <h4>escrito</h4>
            </label>
            <textarea name='texto'></textarea>
        </section>
    </>
}

export default EditNewWritten