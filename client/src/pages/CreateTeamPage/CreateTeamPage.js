import "./CreateTeamPage.scss";
import axios from 'axios';
import PlayerTable from "../../components/PlayerTable/PlayerTable";
import { useState, useEffect } from "react";
import AddPlayerCard from "../../components/AddPlayerCard/AddPlayerCard";
import save from "../../assets/icons/save.svg";
import refresh from "../../assets/icons/refresh.svg";
const {v4:uuidv4} = require('uuid');


function CreateTeamPage () {

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

    // to add player to team, limits team size to 6 total
    const addPlayer = (player) => {
        if (team.length > 5) {
            return
        }
        setTeam([...team, player])
    }

    // to populate players on mount
    useEffect(()=> {
        populateData()
    }, []);

    // to handle submission of team creator
    const handleSubmit = (event) => {
        event.preventDefault()      
        alert(`Your team: ${event.target.teaminput.value} was created`)
        
        // build a new teams object
        const newTeam = {
            TeamName: event.target.teaminput.value,
            id: uuidv4(),
            team: [...team]
        }

        // Add team ID and name to player objects for populating team joiner table
        for(let i=0; i<newTeam.team.length; i++) {
            newTeam.team[i].TeamId = newTeam.id
            newTeam.team[i].TeamName = newTeam.TeamName     
            newTeam.team[i].user_id = sessionStorage.getItem("user_id")  
        }
        // posts built team to database
        axios.post('http://localhost:8080/teams/newteam', newTeam.team)
        event.target.reset()
    }

    // Clears team while building
    const clearTeam = () => {
        setTeam([])
    }

    return (
        <div className="createteam">
            <h1 className="createteam__teamform__title">CREATE TEAM</h1>
            <div className="createteam__desktop-con">
                <div className="createteam-desktop-con__teamform">
                    <div className="createteam__teamform">
                        <form onSubmit={handleSubmit} className="createteam__teamform__form">
                            <input
                            className="createteam__teamform__form__textarea"
                            id="teaminput"
                            name="teaminput"
                            placeholder="Your team name"
                            type="text"
                            />
                            <button type="submit" className="createteam__teamform__form__button"><img src={save} className="createteam__teamform__form__button--icon" alt="floppy disk save"/>Save Team</button>
                        </form>
                    </div>

                    <div className="createteam__team">
                        <p className="createteam__team__title">YOUR ROSTER:</p>
                        {team.map((player)=> {
                            return (
                                <AddPlayerCard
                                props={player}
                                />
                            )
                        })}
                    </div>

                    <div className="createteam__clear">
                        <button className="createteam__clear__button" onClick={() => clearTeam()}><img src={refresh} alt="clockwise arrow" className="createteam__clear__button__icon"/>Start Fresh</button>
                    </div>
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
                    setFumblesOrdered={setFumblesOrdered}
                    />
                </div>
            </div>
        </div>
    )
    
    // populates players database
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