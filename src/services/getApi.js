import {API_URL} from './settings'

export default function getApi ({Rout='',id=null,theme=null} = {}) {

  const apiURL = `${API_URL}/${Rout}${(id||theme)?'?':''}${id?'id='+id+'&':''}${theme?'genero='+theme+'&':''}`
console.log('url api = ',apiURL);
  return fetch(apiURL).then(res => res.json())
  
}