import React from 'react'

import useGlobalThemes from '../../hooks/useGlobalThemes'

function Container ({ params }) {

    const themes = useGlobalThemes()

    const theme = themes.find(e => e.categoria == params.route)

    return <section className='Container'>
        <h2>{params.route}</h2>
    </section>
}

export default Container