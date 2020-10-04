import React from 'react'

function TableRowKidn ({ kind }) {
    return <>
        <tr>
            <td>{kind.categoria}</td>
            <td>{new Date(kind.creado).toLocaleDateString()}</td>
            <td><input type='checkbox' /></td>
        </tr>
    </>
}

export default TableRowKidn