import React, {} from 'react'

function Writtens ({writtens}) {
console.log(writtens);
    return <>
        {
            writtens.map(written => <p key={written._id} >{written.texto}</p> )
        }
    </>
}

export default Writtens