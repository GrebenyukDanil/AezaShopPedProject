import logoImg from "./logo.svg"
import { Link } from "react-router-dom"
import './header.scss'
import { useStore } from "effector-react";
import { $AuthInfo, logout } from "../../effector/login";

const Header = () => {
    const authData = useStore($AuthInfo)
  
    return (
        <div className="header">
            <ul className="header__ul">
                <li className="header__li default-text"><Link className="link" to="/">о нас</Link></li>
                <li className="header__li default-text"><Link className="link" to="/catalog">каталог</Link></li>
            </ul>
            <img src={logoImg} alt="" />
            {authData.auth ?
                <div style={{display: "flex", gap: "10px", alignItems:"center"}}>
                    <p>{authData.email}</p> <button className="btn-small" onClick={(event)=> logout(event)}>Выход</button>
                </div>
                :
                <Link className='link' to="/login">Вход / Регистрация</Link>
            }

        </div>
    );
};

export default Header;
