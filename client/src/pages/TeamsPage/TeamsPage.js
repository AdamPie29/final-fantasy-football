import "./TeamsPage.scss";
import addTeam from "../../assets/icons/add-team.svg";
import axios from 'axios';
import { useNavigate } from "react-router-dom";




function TeamsPage() {

    const navigate = useNavigate();
    
    // to handle submission of team name creator
    const handleSubmit = (event) => {
        alert(`Your team: ${event.target.team.value} was created`)
        event.preventDefault()

        // build a new teams object
        const newTeam = {
            team_name: event.target.team.value,
        }

        // add team to teams table
        axios.post("http://localhost:8080/teams/teams", newTeam)
        .then(_res => {
            event.target.reset()
        })
    }

    

    return (
        <div className="teams">
            <div className="teams__title-con">
                <h1 className="teams__title-con__title">MY TEAMS</h1>
                <button onClick={() => navigate('/createteam')} className="teams__title-con__new-team-button"><img src={addTeam} alt="add team icon" className="teams__title-con__img" />CREATE NEW TEAM</button>
            </div>
        </div>
    )


}

export default TeamsPage;