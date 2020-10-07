import React, {useState} from 'react'

const Context = React.createContext({})

export function ThemesCategoriesContext ({children}) {
  
  const [categories, setCategories] = useState([])
  const [themes, setThemes] = useState([])

  return <Context.Provider value={{ categories, setCategories,themes, setThemes }}>
    {children}
  </Context.Provider>
}

export default Context