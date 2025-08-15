import { useState } from "react"
import SignIn from "./Sign In/login"
import SignUp from "./Sign Up/registration"
import basecss from "./base.module.css"


export default function Auth() {
    const [ variant, setVariant ] = useState('Sign In')

    return (
    <div class={basecss.loginContainer}>

        <div class={basecss.tabContainer}>
            <button class={`${basecss.tab} ${variant == 'Sign Up'? basecss.active: ''}`} onClick={() => setVariant('Sign Up')}>Регистрация</button>
            <button class={`${basecss.tab} ${variant == 'Sign In'? basecss.active: ''}`} onClick={() => setVariant('Sign In')}>Вход</button>
        </div>

        {variant == 'Sign In' ? <SignIn/> : <SignUp />}
    </div>
    )
}