import classes from './Header.module.scss'
import logoImg from "./logo.svg"
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <ul className={classes.header__ul}>
                    <li><Link className={classes.link} to="/">о нас</Link></li>
                    <li><Link className={classes.link} to="/catalog">каталог</Link></li>
                </ul>
                <img src={logoImg} alt="" />
                <p>Вход / Регистрация</p>
            </div>
        </div>
        
    );
};

export default Header;
