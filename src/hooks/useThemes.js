import { useContext, useEffect } from 'react'
import getApi from 'services/getApi'

import ThemesContext from 'context/ThemesContext'

export function useThemes({rout,id,theme}) {

    const {themes, setThemes} = useContext(ThemesContext)

    useEffect(()=>{

        getApi({rout,id,theme})
        .then(res => setThemes(res))

    },[rout,id,theme,setThemes])

    return { themes, setThemes }
}