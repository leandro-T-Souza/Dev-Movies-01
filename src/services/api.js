import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '79af43bf1ed93e9fb0b20880d50c9241',
        liguage: 'pt-BR',
        page: 1
    }
})

export default api