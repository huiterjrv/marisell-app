import React, { useState,useEffect } from 'react'
import { Link } from 'wouter'

import TableRowWritten from './TableRowWrintten'
import getApi from 'services/getApi'

function TableWritten ({ route }) {

    const [writtens, setWrittens] = useState([]);
    const [estatus, setEstatus] = useState([]);

    useEffect(() => {

        getApi({rout:route})
        .then( res => {
            setWrittens(res)
            setEstatus(res.map(e => {
                return {
                    id:e._id,
                    estado:false
                }
            }))
        })        
        
    }, [route]);

    const handleSubmit = () => {

        estatus.forEach(e => {

            if(e.estado){
                let written = writtens.find(elem => elem._id === e.id)
                let config = {
                    method: 'POST',
                    headers: {
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify({
                        ...written,
                        usuario: written.usuario?written.usuario._id:null,
                        creado: written.creado || new Date().toJSON(),
                        actualizado: new Date().toJSON(),
                        estatus:true
                    })   
                }
console.log('written ---> ',written);
                getApi({rout:'written/update'},config).then(res => {
                    console.log('respuesta ---> ',res)
                })
            }
            

        })

    }

    return <>
        <table className="w3-table w3-bordered  w3-hoverable" >
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Genero</th>
                    <th>Categorias</th>
                    <th>Likes</th>
                    <th>comentarios</th>
                    <th>Estado</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {
                writtens.map(e =><TableRowWritten key={e._id} written={e} writtens={writtens} estatus={estatus} setEstado={setEstatus} />)
            }  
            </tbody>
            <tfoot>
                <Link to='/admin/newWritten'>
                    <tr>
                        <th colSpan='6'> agragar +</th>
                    </tr>
                </Link>
            </tfoot>
        </table>
        <button onClick={handleSubmit} >actualizar</button>
    </>
}

export default TableWritten