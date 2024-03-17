import { Link } from "react-router-dom";
import { AppRoute, SingInErrorMessage } from "../../const";
import { loginAction } from "../../store/api-actions";
import { FormEvent, SetStateAction, useRef, useState } from "react";
import type {State, AppDispatch} from '../../types/state';
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

const SignUpPopup: React.FC =() => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    const [error, setError] = useState('');
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const [isErrorPassword, setIsErrorPassword] = useState(false);

    const dispatch = useAppDispatch();

    const containsAnyLetters = (password: string) => /[a-z]+/i.test(password);
    const containsAnyNumbers = (password: string) => /[0-9]+/i.test(password);
    const isValidEmail = (email: string) => /^[\w-\\.]+@+[\w-]+\.[a-z]{2,4}$/i.test(email);

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if (emailRef.current && passwordRef.current) {
        if(!isValidEmail(emailRef.current.value)) {
            setError(SingInErrorMessage.Email);
            setIsErrorEmail(true);
        } else if (!containsAnyLetters(passwordRef.current.value) || !containsAnyNumbers(passwordRef.current.value)) {
            setError(SingInErrorMessage.Password);
            setIsErrorPassword(true);
        } else {
            dispatch(loginAction({
            email: emailRef.current.value,
            password: passwordRef.current.value
            }));
        }
        }
    };
    const [inputType, setInputType] = useState('password');
  
    const toggleInput = ()=>{
        setInputType(inputType === 'password' ? 'text': 'password')
    }
    const [inputType2, setInputType2] = useState('password');
  
    const toggleInput2 = ()=>{
        setInputType2(inputType2 === 'password' ? 'text': 'password')
    }

    const [valueNewPass, setValueNewPass] = useState('');
    const [valueConfirmNewPass, setValueConfirmNewPass] = useState('');
    function handleInput(event: { target: { value: SetStateAction<string>; }; }){
        setValueNewPass(event.target.value);
    }
    function handleInput2(event: { target: { value: SetStateAction<string>; }; }){
        setValueConfirmNewPass(event.target.value);
    }

    return(
        <>
            <div className="modal modal_regis">
                <form className="modal__content" onSubmit={handleSubmit}  action="#">
                    <Link to={AppRoute.Main} className="modal__content-close" id="closeRegisBtn">
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                            <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                        </svg>
                    </Link>

                    <h2 className="modal__content-title">Регистрация</h2>

                    <div className="login__message">
                        <p>{error}</p>
                    </div>

                    <div className="modal_regis__inputs">
                        <div className="modal__content-input-box">
                            <input type="text" placeholder="Фамилия Имя Отчество" required/>
                        </div>

                        <div className="modal__content-input-box">
                            <input className="modal__content-input-box-input"  
                                id="newPassword" 
                                placeholder="Пароль"
                                ref={passwordRef}
                                onChange={handleInput}
                                type={inputType}
                                value={valueNewPass}
                                required/>

                            { (inputType === 'password') &&
                            <div onClick={toggleInput} className="modal__content-input-box-show" id="showPass">
                                <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6.50005L1.09529 6.07402L0.89467 6.50005L1.09529 6.92608L2 6.50005ZM18.9981 6.50005L19.9028 6.92608L20.1034 6.50005L19.9028 6.07402L18.9981 6.50005ZM2.90471 6.92608C4.28556 3.99377 7.17861 2 10.499 2V0C6.34743 0 2.78129 2.49371 1.09529 6.07402L2.90471 6.92608ZM10.499 2C13.8195 2 16.7125 3.99377 18.0934 6.92608L19.9028 6.07402C18.2168 2.49371 14.6507 0 10.499 0V2ZM18.0934 6.07402C16.7125 9.00634 13.8195 11.0001 10.499 11.0001V13.0001C14.6507 13.0001 18.2168 10.5064 19.9028 6.92608L18.0934 6.07402ZM10.499 11.0001C7.17861 11.0001 4.28556 9.00634 2.90471 6.07402L1.09529 6.92608C2.78129 10.5064 6.34743 13.0001 10.499 13.0001V11.0001Z" fill="black"/>
                                    <circle cx="10.502" cy="6.5" r="2.5" stroke="black" strokeWidth="2"/>
                                </svg>
                            </div>
                            }
                            {(inputType === 'text') &&
                                <div onClick={toggleInput} className="modal__content-input-box-hide" id="hidePass">
                                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 7.50005L1.09529 7.07402L0.89467 7.50005L1.09529 7.92608L2 7.50005ZM18.9981 7.50005L19.9028 7.92608L20.1034 7.50005L19.9028 7.07402L18.9981 7.50005ZM2.90471 7.92608C4.28556 4.99377 7.17861 3 10.499 3V1C6.34743 1 2.78129 3.49371 1.09529 7.07402L2.90471 7.92608ZM10.499 3C13.8195 3 16.7125 4.99377 18.0934 7.92608L19.9028 7.07402C18.2168 3.49371 14.6507 1 10.499 1V3ZM18.0934 7.07402C16.7125 10.0063 13.8195 12.0001 10.499 12.0001V14.0001C14.6507 14.0001 18.2168 11.5064 19.9028 7.92608L18.0934 7.07402ZM10.499 12.0001C7.17861 12.0001 4.28556 10.0063 2.90471 7.07402L1.09529 7.92608C2.78129 11.5064 6.34743 14.0001 10.499 14.0001V12.0001Z" fill="black"/>
                                        <path d="M4.00085 0.99939L16.9999 13.9999" stroke="black" strokeWidth="2"/>
                                    </svg>
                                </div>
                            }
                        </div>

                        <div className="modal__content-input-box">
                            <input type="date" placeholder="Дата Рождения" required/>
                        </div>

                        <div className="modal__content-input-box">
                            <input className="modal__content-input-box-input" 
                                id="confirmNewPassword"
                                ref={passwordRef} 
                                onChange={handleInput2}
                                type={inputType2}
                                value={valueConfirmNewPass}
                                placeholder="Повторите пароль" 
                                required/>

                            { (inputType2 === 'password') &&
                                <div onClick={toggleInput2} className="modal__content-input-box-show" id="showPass">
                                    <svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 6.50005L1.09529 6.07402L0.89467 6.50005L1.09529 6.92608L2 6.50005ZM18.9981 6.50005L19.9028 6.92608L20.1034 6.50005L19.9028 6.07402L18.9981 6.50005ZM2.90471 6.92608C4.28556 3.99377 7.17861 2 10.499 2V0C6.34743 0 2.78129 2.49371 1.09529 6.07402L2.90471 6.92608ZM10.499 2C13.8195 2 16.7125 3.99377 18.0934 6.92608L19.9028 6.07402C18.2168 2.49371 14.6507 0 10.499 0V2ZM18.0934 6.07402C16.7125 9.00634 13.8195 11.0001 10.499 11.0001V13.0001C14.6507 13.0001 18.2168 10.5064 19.9028 6.92608L18.0934 6.07402ZM10.499 11.0001C7.17861 11.0001 4.28556 9.00634 2.90471 6.07402L1.09529 6.92608C2.78129 10.5064 6.34743 13.0001 10.499 13.0001V11.0001Z" fill="black"/>
                                        <circle cx="10.502" cy="6.5" r="2.5" stroke="black" strokeWidth="2"/>
                                    </svg>
                                </div>
                            }
                            {(inputType2 === 'text') &&
                                <div onClick={toggleInput2} className="modal__content-input-box-hide" id="hidePass">
                                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 7.50005L1.09529 7.07402L0.89467 7.50005L1.09529 7.92608L2 7.50005ZM18.9981 7.50005L19.9028 7.92608L20.1034 7.50005L19.9028 7.07402L18.9981 7.50005ZM2.90471 7.92608C4.28556 4.99377 7.17861 3 10.499 3V1C6.34743 1 2.78129 3.49371 1.09529 7.07402L2.90471 7.92608ZM10.499 3C13.8195 3 16.7125 4.99377 18.0934 7.92608L19.9028 7.07402C18.2168 3.49371 14.6507 1 10.499 1V3ZM18.0934 7.07402C16.7125 10.0063 13.8195 12.0001 10.499 12.0001V14.0001C14.6507 14.0001 18.2168 11.5064 19.9028 7.92608L18.0934 7.07402ZM10.499 12.0001C7.17861 12.0001 4.28556 10.0063 2.90471 7.07402L1.09529 7.92608C2.78129 11.5064 6.34743 14.0001 10.499 14.0001V12.0001Z" fill="black"/>
                                        <path d="M4.00085 0.99939L16.9999 13.9999" stroke="black" strokeWidth="2"/>
                                    </svg>
                                </div>
                            }
                            {((valueConfirmNewPass === valueNewPass) && (valueConfirmNewPass != '') ) &&
                                <div className="modal__content-input-box-tick_show" >
                                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 6L7.14286 11L16 2" stroke="#6DD627" strokeWidth="3" strokeLinecap="round"/>
                                    </svg>
                                </div>
                            }
                            {((valueConfirmNewPass != valueNewPass) && (valueConfirmNewPass != '') ) &&
                                <div className="modal__content-input-box-tick_show modal__content-close" id="closeRegisBtn">
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 2L17 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                                        <path d="M17 2L2 17" stroke="#FF0000" strokeWidth="3" strokeLinecap="round"/>
                                    </svg>
                                </div>
                            }
                            
                    
                        </div>

                        <div className="modal__content-input-box">
                            <input type="email" 
                                placeholder="Почта"
                                ref={emailRef}
                                required/>
                        </div>
                    </div>
                    {((valueConfirmNewPass === valueNewPass) && (valueConfirmNewPass != '') ) &&
                        <button type="submit" className="modal__content-submit">Войти</button>
                    }
                    {((valueConfirmNewPass != valueNewPass) || (valueConfirmNewPass === '')) &&
                        <button disabled className="modal__content-submit_disable">Войти</button>
                    }
                    <p className="modal__content-text">Нет аккаунта?<Link to={AppRoute.Login}><span id="openAuthBtn"> Войдите</span></Link></p>
                </form>
            </div>
        </>
    )
}

export default SignUpPopup;
