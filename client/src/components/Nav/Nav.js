import './Nav.scss';
import { NavLink } from 'react-router-dom';

function Nav () {

    return (
        <div className="nav">
            <ul className='nav__list'>
                <NavLink to="/signup" className="nav__list-link"><li className="nav__list-item">Log In</li></NavLink>
                <NavLink to="/players" className="nav__list-link"><li className="nav__list-item">Players</li></NavLink>
                <NavLink to="/teams" className="nav__list-link"><li className="nav__list-item">My Teams</li></NavLink>
                <NavLink to="/" className="nav__list-link"><li className="nav__list-item">Season</li></NavLink>
                <NavLink to="/" className="nav__list-link"><li className="nav__list-item">About</li></NavLink>
            </ul>
        </div>
    )


}

export default Nav;