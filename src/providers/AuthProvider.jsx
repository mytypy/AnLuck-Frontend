import React, { createContext, useContext, useState, useCallback } from "react";
import loginUser from "../requests/auth/login";
import registration from "../requests/auth/registration"
import { validateForm } from "../utils/validates";
import userProfile from "../requests/user/user";
import useUser from "../hooks/user/user";

const AuthContext = createContext(null);


export default function AuthContextProvider({ children }) {
    const { user, login, logout } = useUser();
    const [variant, setVariant] = useState("Sign In")
    const [forms, setForms] = useState({
    "Sign In": { email: "", password: "" },
    "Sign Up": {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_retry: "",
        },
    })
    const [messages, setMessages] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const parseErrors = useCallback((errors) =>
        Object.entries(errors || {}).flatMap(([field, msgs]) =>
          (Array.isArray(msgs) ? msgs : [msgs]).map(m => ({ text: `${field}: ${m}`, type: "error" }))
        ), []
      )
    
    const onChange = useCallback((e) => {
        setMessages([])
        const { id, value } = e.target
    
        setForms(prev => ({
          ...prev,
          [variant]: { ...prev[variant], [id]: value }
        }))
      }, [variant])
    
    async function onSubmit(e) {
          e.preventDefault()
          const validationResult = validateForm(forms["Sign In"], forms["Sign Up"], variant)

          if (typeof validationResult === "object") {
            setMessages(validationResult)
            return
          }
      
          setIsLoading(true)
          setMessages([])
      
          const apiMap = {
            "Sign In": { fn: loginUser, successMsg: "Успешный вход в систему!" },
            "Sign Up": { fn: registration, successMsg: "Аккаунт успешно создан!" },
          }
      
          try {
            const { fn, successMsg } = apiMap[variant]
            console.log(fn, successMsg)
            const result = await fn(forms[variant])
            if (result === true) {
              setMessages([{ text: successMsg, type: "success" }])
              if (variant === "Sign Up") {
                setVariant("Sign In")
              }
              else {
                const response = await userProfile()
                if (response) {
                  login(response.user)
                  return true
                }
                
              }
            } else {
              if (variant === "Sign Up") setMessages(parseErrors(result))
              else setMessages([{ text: result?.detail || "Неизвестная ошибка", type: "error" }])
            }
          } catch (err) {
            const payload = err?.response?.data || err
            if (variant === "Sign Up") setMessages(parseErrors(payload))
            else setMessages([{ text: payload?.detail || String(payload), type: "error" }])
          } finally {
            setIsLoading(false)
          }
        }
    const value = {
    variant,
    forms,
    messages,
    isLoading,
    onChange,
    setVariant,
    setMessages,
    onSubmit,
    user
    }

    return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)