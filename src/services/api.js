import axios from 'axios'

export class Api {
  getHome = async () => {
    const response = await axios.get('/home')
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)

    return body
  }
} 

