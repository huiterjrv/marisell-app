import React from 'react'
import { Link } from 'wouter'
import './styles.css'

function NavPage () {
    return <>
        <nav className='nav-page'>
            <p>Mis escritos</p>
            <p>Sobre mi</p>
            <Link to='/admin'><p>Admin</p></Link>
        </nav>
    </>
}

export default NavPage