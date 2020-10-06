import React, { useState,useEffect } from 'react'

import TableRowKidn from './TableRowKind'
import getApi from 'services/getApi'

function TableKind ({ route }) {

    const [kinds, setkinds] = useState([]);

    useEffect(() => {

        getApi({rout:route})
        .then( res => setkinds(res))
        
    }, [route]);

    return <>
        <table className="w3-table w3-bordered w3-hoverable">
            <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Creado</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {
                    kinds.map(e =><TableRowKidn key={e._id} kind={e} />)
                }
            </tbody>
        </table>
    </>
}

export default TableKind