import logincss from '../../styles/login.module.css'
import basecss from '../../styles/base.module.css'
import { data } from './formdata'


export default function SignIn({ form, onChange }) {
    return (
        <div className={logincss.signinFields}>
            {
                data.map((dict) => {
                    return (
                        <div key={dict['key']} className={basecss.formGroup}>
                            <input id={dict['id']}
                             type={dict['type']}
                              className={basecss.formInput}
                               placeholder={dict['placeholder']}
                                value={form[dict['id']]}
                                onChange={onChange}
                                />
                        </div>
                    )
                })
            }
        </div>
    )
}