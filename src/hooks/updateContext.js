import { useContext, useEffect } from 'react'
import getApi from 'services/getApi'

import CategoriesContext from 'context/ThemesCategoriesContext'

export function useUpdateContext() {

    const { categories,setCategories,themes, setThemes } = useContext(CategoriesContext)

    useEffect(()=>{

        getApi({rout:'kind'})
        .then(res => setThemes(res))
        
        getApi({rout:'category'})
        .then(res => setCategories(res))

    },[setThemes,setCategories])

    return { categories,setCategories,themes, setThemes }

}