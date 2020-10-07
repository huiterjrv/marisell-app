import React, { useState,useContext } from 'react'

import ThemesCategoriesContext from 'context/ThemesCategoriesContext'
import { Link } from 'wouter';

function TableRowWritten({ written,writtens,estatus,updata,setUpdata }) {
    
    let {titulo,_id,categoria,genero,like,comentario,estado} = written
    if(genero._id) genero = genero._id
    
    const [writtenState, setWrittenState] = useState({titulo,_id,genero,categoria,like,comentario,estado});
    const { themes } = useContext(ThemesCategoriesContext)

    const handleInputChange = event => {        
        
        writtenState[event.target.name] = event.target.type === 'checkbox' ? event.target.checked : event.target.value

        setWrittenState({
            ...writtenState,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });

        for (let i = 0; i < estatus.length; i++) {

            if(estatus[i].id === writtenState._id){
                
                estatus[i].estado = true
                writtens[i]=writtenState
                break
            
            }
        }

        if(!updata) setUpdata(true)

        /* estado.find(e => {
            if(e.id === writtenState._id){
                e.estado = true
                return true
            }
        }) */

    }

    if(!writtenState)
    return <></>

    return <>
        <tr>
            <td>
                <input type='text' name='titulo' value={writtenState.titulo} onChange={handleInputChange} />
            </td>
            <td>
                <div className='select'>
                    <select name='genero' value={writtenState.genero} onChange={handleInputChange}>
                        {
                            themes.map(e => <option key={e._id} value={e._id} >{e.categoria}</option> )
                        }
                    </select>
                </div>
            </td>
            <td>
                <div>
                    {
                        writtenState.categoria.map(e => <p key={e._id}>{e.genero}</p>)
                    }
                </div>
            </td>
            <td>{writtenState.like.length}</td>
            <td>{writtenState.comentario.length}</td>
            <td>
                <input type='checkbox' name='estado' checked={writtenState.estado} onChange={handleInputChange} />
            </td>
            <td>
                <Link to={`/admin/written/${writtenState._id}`}>
                    <p>
                        <i className="fas fa-pencil-alt"></i>
                    </p>
                </Link>
            </td>
        </tr>
    </>
}

export default TableRowWritten