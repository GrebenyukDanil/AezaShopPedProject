import classes from './Header.module.scss'
import logoImg from "./logo.svg"
import { Link } from "react-router-dom"
import '../../styles/header.scss'
const Header = () => {
    return (
        <div className="header">
            <ul className="header__ul">
                <li className="header__li default-text"><Link className="link" to="/">о нас</Link></li>
                <li className="header__li default-text"><Link className="link" to="/catalog">каталог</Link></li>
            </ul>
            <img src={logoImg} alt="" />
            <p className='header__login-link default-text'><Link className='link' to="/login">Вход / Регистрация</Link> </p>
        </div>
    );
};

export default Header;
