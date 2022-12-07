import { Link, useNavigate } from 'react-router-dom';
import './Header.scss';
import logo from "../../assets/logo/logo-no-background-1.svg";

function Header () {
    return (
        <div className="header">
            <img className="header__img" src={logo} alt="final fantasy football logo" />
        </div>
    )
}

export default Header;