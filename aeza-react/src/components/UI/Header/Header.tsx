import classes from './Header.module.scss'
import logoImg from "./logo.svg"
const Header = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <ul className={classes.header__ul}>
                    <li>каталог</li>
                    <li>доставка</li>
                </ul>
                <img src={logoImg} alt="" />
                <p>Вход / Регистрация</p>
            </div>
        </div>
        
    );
};

export default Header;
