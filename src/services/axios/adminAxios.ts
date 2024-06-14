import axios from 'axios'
// import { apiURL } from '../../utils/constants'


const instance = axios.create({
    baseURL:"https://geniusgrid.online/api",
    withCredentials:true
})

export default instance