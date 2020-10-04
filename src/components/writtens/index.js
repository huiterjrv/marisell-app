import React, {} from 'react'

import Written from '../written'

function Writtens ({writtens}) {
console.log(writtens);
    return <>
        {
            (writtens.length === 0)? <p>En proseso de escribir</p> :
            writtens.map(written => <Written key={written._id} written={written} /> )
        }
    </>
}

export default Writtens