import React, { useState } from 'react'

function TableRowKidn({ kind }) {

    const [kindState, setKindState] = useState(kind);

    const handleInputChange = event => {
        
        setKindState({
            ...kindState,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
        
    }

    if(!kindState)
    return <></>

    return <>
        <tr>
            <td><input type='text' name='categoria' value={kindState.categoria} onChange={handleInputChange} /></td>
            <td>{new Date(kindState.creado).toLocaleDateString()}</td>
            <td><input type='checkbox' name='estado' checked={kindState.estado} onChange={handleInputChange} /></td>
        </tr>
    </>
}

export default TableRowKidn