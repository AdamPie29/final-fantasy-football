import "./Homecard.scss";
import peyton from "../../assets/images/peyton-manning.jpg";
import season from "../../assets/images/season.png";
import team from "../../assets/images/team.jpg";
import { Link } from 'react-router-dom';

function Homecard() {

    return (
        <div className="hc">
            <div className="hc-card">
                <Link to="/" className="hc-card__link">
                    <div className="hc-card-con"> 
                        <img src={peyton} className="hc-card__img hc-card__img--players" alt="artwork of The Sherriff: Peyton Manning"/>
                        <p className="hc-card__title-players">PLAYERS</p>
                    </div>
                    <div className="hc-card__overlay"></div>
                </Link>
            </div>
            <div className="hc-card">
                <Link to="/" className="hc-card__link">
                    <div className="hc-card-con">
                        <img src={team} className="hc-card__img hc-card__img--teams" alt="The Indianapolis Colts in a huddle during Super Bowl XLI"/>
                        <p className="hc-card__title-teams">MY TEAMS</p>
                    </div>
                    <div className="hc-card__overlay"></div>
                </Link>
            </div>
            <div className="hc-card">
                <Link to="/" className="hc-card__link">
                    <div className="hc-card-con"> 
                        <img src={season} className="hc-card__img hc-card__img--season" alt="Peyton versus Brady"/>
                        <p className="hc-card__title-season">SEASON</p>
                    </div>
                    <div className="hc-card__overlay"></div>
                </Link>
            </div>
        </div>
    )
}

export default Homecard;