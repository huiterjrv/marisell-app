import React from 'react'
import { Link } from 'wouter'
import './styles.css'

import {useThemes} from '../../hooks/useThemes'

function NavThemes () {

    const { themes } = useThemes({Rout:'kind'})

    return <>
        <nav>
            {
                themes.map(item => <Link to={`/${item.categoria}`} key={item._id} ><p >{item.categoria}</p></Link>)
            }
        </nav>
    </>
}

export default NavThemes