import React from 'react'

import TableRowWritten from './TableRowWrintten'

function TableWritten ({ writtens }) {

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
                </tr>
            </thead>
            <tbody>
            {
                writtens.map(e =><TableRowWritten key={e._id} written={e} />)
            }
            </tbody>
        </table>
    </>
}

export default TableWritten