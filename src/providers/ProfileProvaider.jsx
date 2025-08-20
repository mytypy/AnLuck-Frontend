import { createContext, useContext } from "react";


const authContext = createContext(null)

const sayMeow = () => console.log('MEOW!')


export default function ProfileProvaider({children}) {

    const values = {
        sayMeow
    }

    return (
        <authContext.Provider value={values}>
            {children}
        </authContext.Provider>
    )
}


export const useProfile = () => useContext(authContext)