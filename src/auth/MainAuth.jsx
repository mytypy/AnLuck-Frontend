"use client"

import { useState } from "react"
import GoogleIcon from "../components/SVG/GoogleIcon"
import GitHubIcon from "../components/SVG/GitHubIcon"
import SignUp from "./Sign Up/registration"
import SignIn from './Sign In/login'
import ErrorMessage from "../components/errors/ErrorMessage"
import main from "../styles/mainauth.module.css"
import login from "../requests/auth/login"
import registration from "../requests/auth/registration"


export default function Auth() {
  const [variant, setVariant] = useState("Sign In")
  const [formSignIn, setFormSignIn] = useState({ email: "", password: "" })
  const [formSignUp, setFormSignUp] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_retry: "",
  })

  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  function parseErrors(errors) {
  return Object.entries(errors).flatMap(([field, messages]) =>
    messages.map(msg => ({ text: `${field}: ${msg}`, type: "error" }))
  );
  }

  function formChange(event) {
    if (messages.length > 0) {
      setMessages([])
    }

    if (variant === "Sign In") {
      setFormSignIn((preventData) => ({
        ...preventData,
        [event.target.id]: event.target.value,
      }))
    } else {
      setFormSignUp((preventData) => ({
        ...preventData,
        [event.target.id]: event.target.value,
      }))
    }
  }

  function validateForm() {
    const errors = []

    if (variant === "Sign In") {
      if (!formSignIn.email) {
        errors.push({ text: "Email обязателен для заполнения", type: "error" })
      } else if (!formSignIn.email.includes("@")) {
        errors.push({ text: "Введите корректный email адрес", type: "error" })
      }

      if (!formSignIn.password) {
        errors.push({ text: "Пароль обязателен для заполнения", type: "error" })
      }
    } else {
      if (!formSignUp.first_name) {
        errors.push({ text: "Имя обязательно для заполнения", type: "error" })
      }


      if (!formSignUp.email) {
        errors.push({ text: "Email обязателен для заполнения", type: "error" })
      } else if (!formSignUp.email.includes("@")) {
        errors.push({ text: "Введите корректный email адрес", type: "error" })
      }

      if (!formSignUp.password) {
        errors.push({ text: "Пароль обязателен для заполнения", type: "error" })
      } else if (formSignUp.password.length < 8) {
        errors.push({ text: "Пароль должен содержать минимум 8 символов", type: "error" })
      }

      if (!formSignUp.password_retry) {
        errors.push({ text: "Подтверждение пароля обязательно", type: "error" })
      } else if (formSignUp.password !== formSignUp.password_retry) {
        errors.push({ text: "Пароли не совпадают", type: "error" })
      }
    }

    if (errors.length > 0) {
      setMessages(errors)
      return false
    }

    return true
  }

  async function submitForm(e) {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)
    setMessages([])

    try {
      const choicer = {
        "Sign In": {
          function: login,
          data: formSignIn,
        },
        "Sign Up": {
          function: registration,
          data: formSignUp,
        },
      }
      const choicenFunction = choicer[variant]["function"]
      const choicenData = choicer[variant]["data"]

      const result = await choicenFunction(choicenData)

      if (result == true) {
        setMessages([
          {
            text: variant === "Sign In" ? "Успешный вход в систему!" : "Аккаунт успешно создан!",
            type: "success",
          },
        ])
      } else {
        throw result
      }
    } catch (error) {
        if (variant == 'Sign Up') {
          const messages = parseErrors(error);
          setMessages(messages);
        }
        else {

          setMessages([{text: error.detail, type: 'error'}])
        }

    } finally {
      setIsLoading(false)
    }
  }

  function handleTabSwitch(newVariant) {
    setVariant(newVariant)
    setMessages([])
  }

  return (
    <div className={main.loginContainer}>
      <div className={main.tabContainer}>
        <button
          className={`${main.tab} ${variant === "Sign Up" ? main.active : ""}`}
          onClick={() => handleTabSwitch("Sign Up")}
        >
          Регистрация
        </button>
        <button
          className={`${main.tab} ${variant === "Sign In" ? main.active : ""}`}
          onClick={() => handleTabSwitch("Sign In")}
        >
          Вход
        </button>
      </div>

      <h1 className={main.formTitle}>{variant === "Sign In" ? "Добро пожаловать обратно" : "Создайте аккаунт"}</h1>

      <ErrorMessage messages={messages} onClose={() => setMessages([])} />

      <form onSubmit={submitForm}>
        {variant === "Sign In" ? (
          <SignIn form={formSignIn} onChange={formChange} />
        ) : (
          <SignUp form={formSignUp} onChange={formChange} />
        )}

        <button type="submit" className={main.submitBtn} disabled={isLoading}>
          {isLoading ? "Загрузка..." : variant === "Sign Up" ? "Создать аккаунт" : "Войти"}
        </button>
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
        By creating an account, you agree to our <a href="#">Terms</a> &<br />
        <a href="#">Privacy Policy</a>
      </p>
    </div>
  )
}
