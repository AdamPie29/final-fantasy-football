import "./PlayerItem.scss";

function PlayerItem ({ FantasyPointsFanDuel, FirstName, Fumbles, LastName, PassingInterceptions, PassingTouchdowns, PassingYards, PhotoUrl, PlayerID, Position, ReceivingTouchdowns, ReceivingYards, RushingTouchdowns, RushingYards, Team }) {

    return (
        <div className="player-row">
            <div className="player-row__player">
                <img className="player-row__player__img" src={PhotoUrl} alt="Player " />
                <div className="player-row__player__details">
                    <p className="player-row__player__details__name">{FirstName + ' ' + LastName}</p>
                    <p className="player-row__player__details__team">{Team} -</p>
                    <p className="player-row__player__details__position">{Position}</p>
                </div>
            </div>
            <p className="player-row__cat">{FantasyPointsFanDuel}</p>
            <p className="player-row__cat">{PassingYards}</p>
            <p className="player-row__cat">{PassingTouchdowns}</p>
            <p className="player-row__cat">{PassingInterceptions}</p>
            <p className="player-row__cat">{RushingYards}</p>
            <p className="player-row__cat">{RushingTouchdowns}</p>
            <p className="player-row__cat">{ReceivingYards}</p>
            <p className="player-row__cat">{ReceivingTouchdowns}</p>
            <p className="player-row__cat">{Fumbles}</p>
        </div>
    )
}

export default PlayerItem;

