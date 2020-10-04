import React, { useState,useContext } from 'react'

import ThemesContext from 'context/ThemesContext'

function TableRowWritten({ written }) {

    const [writtenState, setWrittenState] = useState(written);
    const { themes } = useContext(ThemesContext)

    const handleInputChange = event => {
console.log(event.target.value);
        if(event.target.name === 'categoria'){

            setWrittenState({
                ...writtenState,
                genero:{
                    ...writtenState.genero,
                    _id: event.target.value
                }
            });

        }else{

            setWrittenState({
                ...writtenState,
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
            });

        }
        
    }

    if(!writtenState)
    return <></>

    return <>
        <tr>
            <td><input type='text' name='titulo' value={writtenState.titulo} onChange={handleInputChange} /></td>
            <td>
                <select name='categoria' value={writtenState.genero._id} onChange={handleInputChange}>
                    {
                        themes.map(e => <option key={e._id} value={e._id} >{e.categoria}</option> )
                    }
                </select>
            </td>
            <td>categoria</td>
            <td>{writtenState.like.length}</td>
            <td>{writtenState.comentario.length}</td>
            <td><input type='checkbox' name='estatus' checked={writtenState.estatus} onChange={handleInputChange} /></td>
        </tr>
    </>
}

export default TableRowWritten