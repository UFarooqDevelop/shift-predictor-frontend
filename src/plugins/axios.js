import axios from 'axios'

const axiosIns = axios.create({
// You can add your headers here
// ================================
baseURL: 'http://127.0.0.1:8000/api/',
//baseURL: 'http://192.168.0.112/api/',


// timeout: 1000,
// headers: {
//     Authentication: `Bearer ${localStorage.getItem('accessToken')}`
// }
})

axiosIns.interceptors.request.use(
    async (config) => {
        const token = await JSON.parse(localStorage.getItem('accessToken')??'{}')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

// axiosIns.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axiosIns.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
// axiosIns.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
export default axiosIns
