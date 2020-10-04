import React, {useState} from 'react'

const Context = React.createContext({})

export function ThemesContextProvider ({children}) {
  const [themes, setThemes] = useState([])

  return <Context.Provider value={{themes, setThemes}}>
    {children}
  </Context.Provider>
}

export default Context