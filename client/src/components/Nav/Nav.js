import './Nav.scss';
import { Link, useNavigate } from 'react-router-dom';

function Nav () {

    return (
        <div className="nav">
            <ul className='nav__list'>
                <Link to="/" className="nav__list-link"><li className="nav__list-item">Log In</li></Link>
                <Link to="/" className="nav__list-link"><li className="nav__list-item">Players</li></Link>
                <Link to="/" className="nav__list-link"><li className="nav__list-item">My Teams</li></Link>
                <Link to="/" className="nav__list-link"><li className="nav__list-item">Season</li></Link>
                <Link to="/" className="nav__list-link"><li className="nav__list-item">About</li></Link>
            </ul>
        </div>
    )


}

export default Nav;