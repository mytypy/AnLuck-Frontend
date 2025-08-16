import registrationcss from './registration.module.css'
import basecss from '../base.module.css'


export default function SignUp() {
    return (
        <div className={registrationcss.signupFields}>
            <div className={registrationcss.formRow}>

                <div className={basecss.formGroup}>
                        <input type="text" className={basecss.formInput} placeholder="Имя" required />
                    </div>

                    <div className={basecss.formGroup}>
                        <input type="text" className={basecss.formInput} placeholder="Фамилия" required />
                    </div>

                </div>

                <div className={basecss.formGroup}>
                    <input type="email" className={basecss.formInput} placeholder="Введите ваш email" required />
                </div>

                <div className={basecss.formGroup}>
                    <input type="password" className={basecss.formInput} placeholder="Придумайте пароль" required />
                </div>

                <div className={basecss.formGroup}>
                    <input type="password" className={basecss.formInput} placeholder="Повторите пароль" required />
                </div>
            </div>
    )
}