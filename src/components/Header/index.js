import React from 'react'
import { Link } from 'wouter'
import './styles.css'

import SectionButton from 'components/SectionButton/index'

function HeaderTitel () {
    return  <>
        <header className='w3-display-container'>
            <h1 className='w3-display-middle'><Link to='/' >ESCRITOS.mv</Link></h1>
            <SectionButton />
        </header>
    </>
}

export default HeaderTitel