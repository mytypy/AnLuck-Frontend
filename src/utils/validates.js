export function validateForm(formSignIn, formSignUp, variant) {
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
      return errors
    }

    return true
  }