import "./AddPlayerCard.scss";

function AddPlayerCard ({props}) {

    return (
        <div className="add-player-row">
            <div className="add-player-row__player">
                <img className="add-player-row__player__img" src={props.PhotoUrl} alt="Player " />
                <div className="add-player-row__player__details">
                    <p className="add-player-row__player__details__name">{props.FirstName + ' ' + props.LastName}</p>
                    <p className="add-player-row__player__details__position">{props.Position}</p>
                </div>
            </div>
        </div>
    )
}

export default AddPlayerCard;