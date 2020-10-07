import React, {} from 'react'
import './styles.css'

import Written from './Written'
import LoadWritten from 'components/loading/written'

function Writtens ({writtens,loading}) {

    if(loading)
    return<>
        <LoadWritten />
        <LoadWritten />
    </>
    return <>
        {
            (writtens.length === 0)? <p>En proseso de escribir</p> :
        writtens.map(written => written.estado?<Written key={written._id} written={written} />: '' )
        }
    </>
}

export default Writtens