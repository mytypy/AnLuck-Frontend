import { Routes, Route } from "react-router-dom"
import Auth from "./auth/MainAuth"
import Profile from "./user/profile/profile"


export default function App() {
    return (
        <Routes>
            <Route path="/" element={
                <Auth/>
            }/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}