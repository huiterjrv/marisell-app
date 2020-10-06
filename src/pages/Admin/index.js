import React from 'react'
import { Link } from 'wouter'

function Admin () {
    return <>
        <section className='Admin'>
            <h2>Sona de la Admin</h2>
            <Link to='/admin/written' ><h3>Escritos</h3></Link>
            <Link to='/admin/kind' ><h3>Genero</h3></Link>
            <Link to='/admin/category' ><h3>Categoria</h3></Link>
        </section>
    </>
}

export default Admin