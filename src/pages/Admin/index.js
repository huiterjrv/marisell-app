import React from 'react'
import { Link } from 'wouter'

function Admin () {
    return <>
        <section className='Admin'>
            <h2>Sona de la Admin</h2>
            <Link to='/admin/written' ><p>Escritos</p></Link>
            <Link to='/admin/kind' ><p>Genero</p></Link>
            <Link to='/admin/category' ><p>Categoria</p></Link>
        </section>
    </>
}

export default Admin