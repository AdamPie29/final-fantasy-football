import "./CreateTeamPage.scss";
import axios from 'axios';
import PlayerTable from "../../components/PlayerTable/PlayerTable";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import AddPlayerCard from "../../components/AddPlayerCard/AddPlayerCard";

function CreateTeamPage () {

    const {teamid} =useParams();
    const navigate = useNavigate();

    // piece of state for all players
    const [allPlayers, setAllPlayers] = useState([])

    // piece of state for all players to show
    const [playerData, setPlayerData] = useState([])

    // pieces of state for sorting player data
    const [nameOrdered, setNameOrdered] = useState(false)
    const [fanpointsOrdered, setFanpointsOrdered] = useState(false)
    const [passyardsOrdered, setPassyardsOrdered] = useState(false)
    const [passtdsOrdered, setPasstdsOrdered] = useState(false)
    const [intOrdered, setIntOrdered] = useState(false)
    const [rushyardsOrdered, setRushyardsOrdered] = useState(false)
    const [rushtdsOrdered, setRushtdsOrdered] = useState(false)
    const [receiveyardsOrdered, setReceiveyardsOrdered] = useState(false)
    const [receivetdsOrdered, setReceivetdsOrdered] = useState(false)
    const [fumblesOrdered, setFumblesOrdered] = useState(false)

    // piece of state to build team
    const [team, setTeam] = useState([])

    const addPlayer = (player) => {
        if (team.length > 5) {
            return
        }
        setTeam([...team, player])
    }
    console.log(team)

    useEffect(()=> {
        populateData()
    }, []);

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
    navigate(`/createteam/` + teamid)
}

    return (
        <div className="createteam">
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
            <div className="createteam__teamform">
                <form className="createteam__teamform__form">
                    <label>Team Name:</label>
                    <textarea
                    id="teaminput"
                    name="team"
                    placeholder="Your team name"
                    type="submit"
                    className="createteam__teamform__form__textarea" />
                    <button type="submit">Save Team</button>
                </form>

            </div>

            <div className="team">
                {team?.map((player)=> {
                    return (
                        <AddPlayerCard
                        props={player}/>
                    )
                })}
            </div>

            <div className="playertable-con">
                <PlayerTable 
                addPlayer={addPlayer}
                playerData={playerData}
                setPlayerData={setPlayerData}
                nameOrdered={nameOrdered}
                setNameOrdered={setNameOrdered}
                fanpointsOrdered={fanpointsOrdered}
                setFanpointsOrdered={setFanpointsOrdered}
                passyardsOrdered={passyardsOrdered}
                setPassyardsOrdered={setPassyardsOrdered}
                passtdsOrdered={passtdsOrdered}
                setPasstdsOrdered={setPasstdsOrdered}
                intOrdered={intOrdered}
                setIntOrdered={setIntOrdered}
                rushyardsOrdered={rushyardsOrdered}
                setRushyardsOrdered={setRushyardsOrdered}
                rushtdsOrdered={rushtdsOrdered}
                setRushtdsOrdered={setRushtdsOrdered}
                receiveyardsOrdered={receiveyardsOrdered}
                setReceiveyardsOrdered={setReceiveyardsOrdered}
                receivetdsOrdered={receivetdsOrdered}
                setReceivetdsOrdered={setReceivetdsOrdered}
                fumblesOrdered={fumblesOrdered}
                setFumblesOrdered={setFumblesOrdered}/>
            </div>
            
        </div>

    )

    async function populateData() {
        try {
            const response = await axios.get('http://localhost:8080/player/')
            setAllPlayers(response.data)
            setPlayerData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

}

export default CreateTeamPage;