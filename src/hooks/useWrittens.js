import { useEffect,useContext } from 'react'
import getApi from 'services/getApi'

import ThemesCategoriesContext from 'context/ThemesCategoriesContext'

export function getWrittens({rout,id,theme,params}) {

    const { themes } = useContext(ThemesCategoriesContext)
    console.log(themes);

    const idTheme = () => {
        return themes.find(e => e.categoria === params.route)
    }

    useEffect(()=>{

        return idTheme()
        .then(res => getApi({rout,id,theme:res._id}))
        .then(res => res)

    },[rout,id,theme])

}