import axios from "axios";


export default async function registration(data) {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/auth/registration/', data)
        console.log(await response.data)
    } catch (error) {
        console.log(error)
    }
}