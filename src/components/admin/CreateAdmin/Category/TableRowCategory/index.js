import React, { useState } from 'react'

function TableRowCategory ({ category }) {

    const [categoryState, setCategoryState] = useState(category);

    const handleInputChange = event => {
        
        setCategoryState({
            ...categoryState,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        });
        
    }

    return <>
        <tr>
            <td><p style={{backgroundColor:categoryState.background,color:categoryState.color}}>{categoryState.genero}</p></td>
            <td><input type='text' name='genero' value={categoryState.genero} onChange={handleInputChange} /></td>
            <td><input type='color' name='color' value={categoryState.color} onChange={handleInputChange}  /></td>
            <td><input type='color' name='background' value={categoryState.background} onChange={handleInputChange}  /></td>
            <td><input type='checkbox' name='estado' checked={categoryState.estado} onChange={handleInputChange} /></td>
        </tr>
    </>
}

export default TableRowCategory