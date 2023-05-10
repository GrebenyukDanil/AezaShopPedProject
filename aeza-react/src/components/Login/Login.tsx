import { useStore } from 'effector-react';
import classes from './Login.module.scss'
import { $LoginFormData, formChanged } from '../../effector';
const Login = () => {
    const formInfo:any = useStore($LoginFormData)
    
    return (
        <div className={classes.login}>
            <p className={classes.login__text}>вход в аккаунт🚪</p>
            <form className={classes.login__form}>
                <div>
                    <input 
                        placeholder='Почта'
                        className={classes.login__input}
                        type="text" 
                        name="email"
                        value={formInfo.email}
                        onChange={(event:any) => formChanged(event.target)}
                    />
                    <p className={classes.login__err}>{formInfo.errors.email}</p>
                </div>
                <div>
                    <input 
                        placeholder='Пароль'
                        className={classes.login__input}
                        type="password" 
                        name="password"
                        value={formInfo.password}
                        onChange={(event:any) => formChanged(event.target)}
                    />
                    <p className={classes.login__err}>{formInfo.errors.password}</p>
                </div>
                
                <button className={classes.login__btn} disabled={!(Object.keys(formInfo.errors).length === 0)} type="submit">Войти в аккаунт</button>
            </form>
        </div>
    );
};

export default Login;
