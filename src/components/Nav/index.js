import React from 'react'
import { Link } from 'wouter'
import './styles.css'

import { useUpdateContext } from 'hooks/updateContext'

function NavThemes () {

    const { themes } = useUpdateContext()

    return <>
        <nav className='nav-themes'>
            {
                themes.map(item => <Link to={`/writtens/${item.categoria}`} key={item._id} ><p >{item.categoria}</p></Link>)
            }
        </nav>
    </>
}

export default NavThemes