import React, { useState,useEffect } from 'react'

import TableRowCategory from './TableRowCategory'
import getApi from 'services/getApi'

function TableCategory ({ route }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        getApi({rout:route})
        .then( res => setCategories(res))
        
    }, [route]);

    return <>
        <table className="w3-table w3-bordered w3-hoverable">
            <thead>
                <tr>
                    <th>preview</th>
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