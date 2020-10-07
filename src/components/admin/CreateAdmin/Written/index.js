import React, { useState,useEffect } from 'react'
import { Link } from 'wouter'
import './styles.css'

import TableRowWritten from './TableRowWrintten'
import getApi from 'services/getApi'
import TableLoader from 'components/loading/TableLoader'

function TableWritten ({ route }) {

    const [writtens, setWrittens] = useState([]);
    const [estatus, setEstatus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [updata, setUpdata] = useState(false);

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
            setLoading(false)
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
                    body: { 
                        message:JSON.stringify({
                            ...written,
                            usuario: written.usuario?written.usuario._id:null,
                            creado: written.creado || new Date().toJSON(),
                            actualizado: new Date().toJSON(),
                            estatus:true
                        })
                    }  
                }
console.log('written ---> ',written);
                getApi({rout:'written/update'},config).then(res => {
                    console.log('respuesta ---> ',res)
                })
            }
            

        })

    }

    if(loading)
    return <>
        <section className='table-written'>
            <TableLoader />
        </section>
    </>

    return <>
        <section className='table-written'>
            <table className="w3-table" >
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Genero</th>
                        <th>Categorias</th>
                        <th>Likes</th>
                        <th>comentarios</th>
                        <th colSpan='2'>Estado</th>
                    </tr>
                </thead>
                <tbody>
                {
                    writtens.map(e =><TableRowWritten key={e._id} updata={updata} setUpdata={setUpdata} written={e} writtens={writtens} estatus={estatus} setEstado={setEstatus} />)
                }  
                </tbody>
                <tfoot>
                    <Link to='/admin/newWritten'>
                        <tr>
                            <th colSpan='7'> Agrega <i className="fas fa-plus-circle"></i></th>
                        </tr>
                    </Link>
                </tfoot>
            </table>
            {
                updata? <p className='button' onClick={handleSubmit} >actualizar <i class="fas fa-upload"></i></p> : ''
            }
        </section>
    </>
}

export default TableWritten