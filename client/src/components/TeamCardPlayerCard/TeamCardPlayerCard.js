import "./TeamCardPlayerCard.scss";

function TeamCardPlayerCard ({props}) {

    return (
        <div>
            <div className="team-card__player-info">
                <p className="team-card__player-info__position">{props.Position}</p>
                <img src={props.PhotoUrl} alt="bust of player" className="team-card__player-info__img" />
                <p className="team-card__player-info__player-name">{props.FirstName} {props.LastName}</p>
            </div>
        </div>
    )
}

export default TeamCardPlayerCard;