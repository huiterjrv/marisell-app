import React from 'react'

function TableRowCategory ({ category }) {
    return <>
        <tr>
            <td>{category.genero}</td>
            <td>{category.color}</td>
            <td>{category.background}</td>
            <td>{category.estado}</td>
        </tr>
    </>
}

export default TableRowCategory