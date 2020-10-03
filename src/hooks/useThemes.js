import { useContext, useEffect } from 'react'
import getApi from 'services/getApi'

import ThemesContext from 'context/ThemesContext'

export function useThemes({Rout,id,theme}) {

    const {themes, setThemes} = useContext(ThemesContext)

    useEffect(()=>{

        getApi({Rout,id,theme})
        .then(res => setThemes(res))

    },[Rout,id,theme,setThemes])

    return { themes, setThemes }
}