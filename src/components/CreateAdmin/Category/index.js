import React from 'react'

import TableRowCategory from './TableRowCategory'

function TableCategory ({ categories }) {

    return <>
        <table className="w3-table w3-bordered w3-hoverable">
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
                    categories.map(e => <TableRowCategory key={e._id} category={e} />)
                }
            </tbody>
        </table>
    </>
}

export default TableCategory