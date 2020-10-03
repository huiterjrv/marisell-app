import {API_URL} from './settings'

export default function getApi ({Rout=''} = {}) {
  const apiURL = `${API_URL}/${Rout}`

  return fetch(apiURL)
    .then(res => res.json())
}