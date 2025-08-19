import registrationcss from '../../styles/registration.module.css'
import basecss from '../../styles/base.module.css'
import { dataROW, data } from './formdata'


export default function SignUp({ form, onChange }) {
    return (
        <div className={registrationcss.signupFields}>
            <div className={registrationcss.formRow}>
                {
                    dataROW.map((dict) => {
                        return (
                            <div key={dict['key']}
                            className={basecss.formGroup}>
                                <input id={dict['id']}
                                key={dict['id']}
                                onChange={onChange}
                                 type={dict['type']}
                                  className={basecss.formInput}
                                   placeholder={dict['placeholder']}
                                    required={'required' ? dict['required']  : ''}
                                     value={form[dict['id']]}/>
                            </div>
                        )
                    })
                }

            </div>
                {
                    data.map((dict) => {
                        return (
                            <div key={dict['key']}className={basecss.formGroup}>
                                <input id={dict['id']}
                                onChange={onChange}
                                key={dict['id']}
                                 type={dict['type']}
                                  className={basecss.formInput}
                                   placeholder={dict['placeholder']}
                                    required={'required' ? dict['required']  : ''}
                                     value={form[dict['id']]}/>
                            </div>
                        )
                    })
                }
        </div>
    )
}