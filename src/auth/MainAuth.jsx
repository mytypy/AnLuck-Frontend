import { useState } from "react"
import GoogleIcon from "../components/SVG/GoogleIcon"
import GitHubIcon from "../components/SVG/GitHubIcon"
import SignIn from "./Sign In/login"
import SignUp from "./Sign Up/registration"
import main from "./mainauth.module.css"


export default function Auth() {
    const [ variant, setVariant ] = useState('Sign In')

    return (
    <div className={main.loginContainer}>

        <div class={main.tabContainer}>
            <button className={`${main.tab} ${variant === 'Sign Up'? main.active: ''}`} onClick={() => setVariant('Sign Up')}>Регистрация</button>
            <button className={`${main.tab} ${variant === 'Sign In'? main.active: ''}`} onClick={() => setVariant('Sign In')}>Вход</button>
        </div>

        <h1 className={main.formTitle}>{variant === 'Sign In' ? 'Добро пожаловать обратно' : 'Создайте аккаунт'}</h1>

        <form>
            {variant === 'Sign In' ? <SignIn/> : <SignUp />}

            <button type="submit" className={main.submitBtn}>{variant === 'Sign Up' ? 'Создать аккаунт' : 'Войти'}</button>
        </form>

        <div class={main.divider}>OR LOGIN WITH</div>

        <div class={main.socialButtons}>
            <button class={`${main.socialBtn} google-btn`}>
                <GoogleIcon />
                Google
            </button>
            <button class={`${main.socialBtn} github-btn`}>
                <GitHubIcon />
                GitHub
            </button>
        </div>

        <p class={main.terms}>
            By creating an account, you agree to our <a href="#">Terms</a> &<br/>
            <a href="#">Privacy Policy</a>
        </p>
    </div>
    )
}