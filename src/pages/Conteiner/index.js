import React, {useState,useEffect} from 'react'

import getApi from 'services/getApi'
import WrittenList from 'components/Writtens'

function Container ({ params }) {

    const [writtens, setWrittens] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        setLoading(true)

        getApi({rout:'kind'}).then(async res => {

            let theme = await res.find(e => e.categoria === params.route)
    
            if(theme.length === 0) return theme

            return getApi({rout:'written',theme:theme._id})

        }).then(res => { 
            setWrittens(res)
            setLoading(false)
        })

    },[params.route])
    

    return <>
        <section className='Container'>
            <h2>{params.route}</h2>
            <WrittenList writtens={writtens} loading={loading} />
        </section>
    </>
}

export default Container