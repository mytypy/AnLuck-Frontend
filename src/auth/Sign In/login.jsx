import logincss from './login.module.css'
import basecss from '../base.module.css'


export default function SignIn() {
    return (
        <div className={logincss.signinFields}>
            <div class={basecss.formGroup}>
                <input type="email" className={basecss.formInput} placeholder="Введите ваш email" required />
            </div>

            <div class={basecss.formGroup}>
                <input type="password" className={basecss.formInput} placeholder="Введите ваш пароль" required />
            </div>
        </div>
    )
}