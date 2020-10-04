import React from 'react'

function TableWritten ({ writtens }) {

    return <>
        <table className="w3-table w3-bordered">
            <thead>
                <tr>
                    <th>Genero</th>
                    <th>Color</th>
                    <th>Fondo</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
            {
                writtens.map(e =><>
                    <tr key={e._id} >
                        <td>e.genero</td>
                        <td>e.color</td>
                        <td>e.background</td>
                        <td>e.estado</td>
                    </tr>
                </>)
            }
            </tbody>
        </table>
    </>
}

export default TableWritten