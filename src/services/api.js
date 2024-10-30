import axios from 'axios'


//Base
//https://api.themoviedb.org/3/
//movie/now_playing?api_key=80b6b17b1c55a97c8a2611ea7595d9ce


const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/'

})

export default api;