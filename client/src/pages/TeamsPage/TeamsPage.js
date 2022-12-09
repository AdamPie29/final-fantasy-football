import "./TeamsPage.scss";
import addTeam from "../../assets/icons/add-team.svg";
import axios from 'axios';




function TeamsPage() {

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
                <button className="teams__title-con__new-team-button"><img src={addTeam} alt="add team icon" className="teams__title-con__img" />CREATE NEW TEAM</button>
            </div>
            
            <div className="container">
                <input type="checkbox" id="view-0" />
	            <label for="view-0">CREATE NEW TEAM</label>
                <form onSubmit={handleSubmit} className="content" id="content-0">
                    <label>Team Name:
                        {/* <input type="text" name="name" /> */}
                    </label>
                    <textarea 
                    id="teaminput" 
                    name="team" 
                    placeholder="Your team name" type="submit"
                    className="content__form" />
                    <button type="submit">Submit</button>
                </form>
            </div>
            
            
        </div>
    )


}

export default TeamsPage;