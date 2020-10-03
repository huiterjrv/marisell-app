import React, { useContext } from 'react'
import { Route } from 'wouter'

import ThemesContext from '../../context/ThemesContext'
import Container from '../../pages/Conteiner/index'

function Routes () {

    const {themes, setThemes} = useContext(ThemesContext);
console.log('aqkiiii',{themes, setThemes});

    return <>
        {
            themes.map(item => <Route path={`/${item.categoria}`} key={item._id} component={Container} />)
        }
    </>
}

export default Routes