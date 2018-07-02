   import Vue from "vue"
   import axios from 'axios'

   axios.defaults.baseURL="/api";
   export const soon = ()=>{
       return axios.get('/movie/coming_soon');
   }
   export const top250=()=>{
       return axios.get('/movie/top250');
   }
   export const detail=(id)=>{
   		return axios.get('/movie/subject/'+id);
   }
