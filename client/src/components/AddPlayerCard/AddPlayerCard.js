import "./AddPlayerCard.scss";

function AddPlayerCard ({props}) {

    return (
        <div className="player-row">
            <div className="player-row__player">
                <img className="player-row__player__img" src={props.PhotoUrl} alt="Player " />
                <div className="player-row__player__details">
                    <p className="player-row__player__details__name">{props.FirstName + ' ' + props.LastName}</p>
                    <p className="player-row__player__details__team">{props.Team} -</p>
                    <p className="player-row__player__details__position">{props.Position}</p>
                </div>
            </div>
        </div>
    )
}

export default AddPlayerCard;