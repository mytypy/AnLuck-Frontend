import axios from "axios";

export default async function userProfile() {
    try {
        const response = await axios.get('http://127.0.0.1:8000/api/user/user/', {withCredentials: true})
        return response.data
    } catch (error) {
        return false
    }
}