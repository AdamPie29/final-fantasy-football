import "./TeamCard.scss";
import TeamCardPlayerCard from "../TeamCardPlayerCard/TeamCardPlayerCard";

function TeamCard ({props}) {

    return (
        <div className="team-card">
            <p className="team-card__team-name">{props[0].TeamName}</p>
            {props.map((players)=> {
                return (
                    <TeamCardPlayerCard
                    props={players}
                    />
                )
            })}
        </div>
    )

};

export default TeamCard;

