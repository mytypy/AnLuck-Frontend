import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';


export default function IsAuth({ children }) {
    const navigate  = useNavigate()
    const { user } = useAuth()

    if (user) {
        return children
    }

    useEffect(() => {
        return navigate('/')
    }, [navigate])

}