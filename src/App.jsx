import { Routes, Route } from "react-router-dom"
import AuthContextProvider from "./providers/AuthProvider"
import Auth from "./auth/MainAuth"
import Profile from "./user/profile/profile"
import IsAuth from "./components/isAuth/isAuth"
import ProfileProvaider from "./providers/ProfileProvaider"


export default function App() {
    return (
    <AuthContextProvider>
        <Routes>
            <Route path="/" element={
                    <Auth/>
            }/>
            <Route path="/profile" element={
                <IsAuth>
                    <ProfileProvaider> 
                        <Profile/>
                    </ProfileProvaider>
                </IsAuth>
                }/>
        </Routes>
    </AuthContextProvider>
    )
}