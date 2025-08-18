import axios from "axios";


export default async function login(data) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/login/', data, {withCredentials: true})
        
        return true
    } catch (error) {
        return await error.response.data
    }
}