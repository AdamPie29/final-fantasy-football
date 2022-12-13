import "./TeamCardPlayerCard.scss";

function TeamCardPlayerCard ({props}) {

    return (
        <div classsName="player-card">
            <div className="player-card__player-info">
                <p className="player-card__player-info__position">{props.Position}</p>
                <img src={props.PhotoUrl} alt="bust of player" className="player-card__player-info__img" />
                <p className="player-card__player-info__player-name">{props.FirstName} {props.LastName}</p>
                <p className="player-card__player-info__player-team">{props.Team}</p>
            </div>
        </div>
    )
}

export default TeamCardPlayerCard;