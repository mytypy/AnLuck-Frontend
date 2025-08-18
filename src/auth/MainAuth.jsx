import { useState } from "react"
import GoogleIcon from "../components/SVG/GoogleIcon"
import GitHubIcon from "../components/SVG/GitHubIcon"
import SignIn from "./Sign In/login"
import SignUp from "./Sign Up/registration"
import main from "./mainauth.module.css"
import login from "../requests/auth/login"
import registration from "../requests/auth/registration"


export default function Auth() {
    const [ variant, setVariant ] = useState('Sign In')

    const [formSignIn, setFormSignIn] = useState({ email: '', password: '' })
    const [formSignUp, setFormSignUp] = useState({
        first_name: '', last_name: '', email: '', password: '', password_retry: ''
    })

    function formChange(event) {
        if (variant === 'Sign In') {
            setFormSignIn((preventData) => ({
                ...preventData,
                [event.target.id]: event.target.value
            }))
        }
        else {
            setFormSignUp((preventData) => ({
                ...preventData,
                [event.target.id]: event.target.value
            }))
        }
    }
    async function submitForm(e) {
        e.preventDefault()

        const choicer = {
            'Sign In': {
                'function': login,
                'data': formSignIn
            },
            'Sign Up': {
                'function': registration,
                'data': formSignUp
            }
        }
        const choicenFunction = choicer[variant]['function']
        const choicenData = choicer[variant]['data']
        await choicenFunction(choicenData)

        console.log(`Отправлена форма: ${variant}`)
    }

    return (
    <div className={main.loginContainer}>

        <div className={main.tabContainer}>
            <button className={`${main.tab} ${variant === 'Sign Up'? main.active: ''}`} onClick={() => setVariant('Sign Up')}>Регистрация</button>
            <button className={`${main.tab} ${variant === 'Sign In'? main.active: ''}`} onClick={() => setVariant('Sign In')}>Вход</button>
        </div>

        <h1 className={main.formTitle}>{variant === 'Sign In' ? 'Добро пожаловать обратно' : 'Создайте аккаунт'}</h1>

        <form onSubmit={submitForm}>
            {variant === 'Sign In' ? <SignIn form={formSignIn} onChange={formChange}/> : <SignUp form={formSignUp} onChange={formChange}/>}

            <button type="submit" className={main.submitBtn}>{variant === 'Sign Up' ? 'Создать аккаунт' : 'Войти'}</button>
        </form>

        <div className={main.divider}>OR LOGIN WITH</div>

        <div className={main.socialButtons}>
            <button className={`${main.socialBtn} google-btn`}>
                <GoogleIcon />
                Google
            </button>
            <button className={`${main.socialBtn} github-btn`}>
                <GitHubIcon />
                GitHub
            </button>
        </div>

        <p className={main.terms}>
            By creating an account, you agree to our <a href="#">Terms</a> &<br/>
            <a href="#">Privacy Policy</a>
        </p>
    </div>
    )
}