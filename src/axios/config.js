import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://a-mong-us.herokuapp.com'
})

export default instance
