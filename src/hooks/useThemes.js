import { useContext, useEffect } from 'react'
import getApi from '../services/getApi'

import ThemesContext from '../context/ThemesContext'

export function useThemes({Rout}) {

    const {themes, setThemes} = useContext(ThemesContext)

    useEffect(()=>{

        getApi({Rout})
        .then(res => setThemes(res))

    },[])

    return { themes, setThemes }
}