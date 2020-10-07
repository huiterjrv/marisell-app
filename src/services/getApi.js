import {API_URL} from './settings'

export default function getApi ({rout='',id=null,theme=null} = {},config = {}) {

  const apiURL = `${API_URL}/${rout}${(id||theme)?'?':''}${id?'id='+id+'&':''}${theme?'genero='+theme+'&':''}`
console.log('url api = ',apiURL);
  return fetch(apiURL,config).then(res => res.json())
  
}