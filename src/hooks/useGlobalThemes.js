import {useContext} from 'react'
import ThemesContext from 'context/ThemesContext'

export default function useGlobalThemes () {
  return useContext(ThemesContext).themes
}