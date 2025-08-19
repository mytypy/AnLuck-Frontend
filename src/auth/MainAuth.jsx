import GoogleIcon from "../components/SVG/GoogleIcon"
import GitHubIcon from "../components/SVG/GitHubIcon"
import SignUp from "./Sign Up/registration"
import SignIn from './Sign In/login'
import ErrorMessage from "../components/errors/ErrorMessage"
import main from "../styles/mainauth.module.css"

import { useAuth } from "../providers/AuthProvider"
import { useNavigate } from "react-router-dom"


const VARIANTS = {
  "Sign In": { label: "Вход", title: "Добро пожаловать обратно" },
  "Sign Up": { label: "Регистрация", title: "Создайте аккаунт" },
}

export default function Auth() {
  const navigate = useNavigate()
  const { variant,
    setVariant,
    forms,
    messages,
    setMessages,
    isLoading,
    onChange,
    onSubmit
    } = useAuth()

  const handleSubmit = async (e) => {
    const result = await onSubmit(e);
    if (result) {
      navigate('/profile');
    }
};
  return (
    <div className={main.loginContainer}>
      <div className={main.tabContainer}>
        {Object.keys(VARIANTS).map(key => (
          <button
            key={key}
            className={`${main.tab} ${variant === key ? main.active : ""}`}
            onClick={() => { setVariant(key); setMessages([]) }}
            type="button"
          >
            {VARIANTS[key].label}
          </button>
        ))}
      </div>

      <h1 className={main.formTitle}>{VARIANTS[variant].title}</h1>

      <ErrorMessage messages={messages} onClose={() => setMessages([])} />

      <form onSubmit={handleSubmit}>
        {variant === "Sign In"
          ? <SignIn form={forms["Sign In"]} onChange={onChange} />
          : <SignUp form={forms["Sign Up"]} onChange={onChange} />
        }

        <button type="submit" className={main.submitBtn} disabled={isLoading}>
          {isLoading ? "Загрузка..." : variant === "Sign Up" ? "Создать аккаунт" : "Войти"}
        </button>
      </form>

      <div className={main.divider}>OR LOGIN WITH</div>

      <div className={main.socialButtons}>
        <button className={`${main.socialBtn} google-btn`} type="button"><GoogleIcon /> Google</button>
        <button className={`${main.socialBtn} github-btn`} type="button"><GitHubIcon /> GitHub</button>
      </div>

      <p className={main.terms}>
        By creating an account, you agree to our <a href="#">Terms</a> &<br />
        <a href="#">Privacy Policy</a>
      </p>
    </div>
  )
}
