import axios from 'axios'
import { BASE_URL } from 'babel-plugin-dotenv-import'

export default axios.create({
  baseURL: BASE_URL,
})
