import { Link } from 'react-router-dom';
import './Header.scss';
import logo from "../../assets/logo/logo-no-background-1.svg";

function Header () {
    return (
        <div className="header">
            <Link to="/"><img className="header__img" src={logo} alt="final fantasy football logo" /></Link>
        </div>
    )
}

export default Header;