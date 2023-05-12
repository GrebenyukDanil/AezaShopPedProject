import { useStore } from 'effector-react';
import { $LoginFormData, formChanged, login } from '../../effector';
import '../../styles/login.scss'
import { type } from 'os';
const Login = () => {
    const formInfo: any = useStore($LoginFormData)

    return (
        <div className="login">
            <p className="login__text default-big-text">вход в аккаунт</p>
            <form className="login__form">
                <div>
                    <input
                        placeholder='Почта'
                        className="login__input"
                        type="text"
                        name="email"
                        value={formInfo.email}
                        onChange={(event: any) => formChanged(event.target)}
                    />
                    <p className="login__err">{formInfo.errors.email}</p>
                </div>
                <div>
                    <input
                        placeholder='Пароль'
                        className="login__input"
                        type="password"
                        name="password"
                        value={formInfo.password}
                        onChange={(event: any) => formChanged(event.target)}
                    />
                    <p className="login__err">{formInfo.errors.password}</p>
                </div>
                <button className="black-button login__btn" type="button" disabled={!(Object.keys(formInfo.errors).length === 0)} onClick={(event) => login(event)}>Войти в аккаунт</button>
            </form>
        </div>
    );
};

export default Login;
