// import Vue from "vue"
// import axios from 'axios'

// axios.defaults.baseURL = "/api";

// export const soon = () => {
//     return axios.get('/movie/coming_soon');
// }
// export const top250 = () => {
//     return axios.get('/movie/top250');
// }


import Vue from "vue"
import axios from 'axios'

axios.defaults.baseURL="/api";

export const getData = ()=>{
    return axios.get('/movie/in_theaters');
}