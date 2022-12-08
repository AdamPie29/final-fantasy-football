import "./PlayersPage.scss";
import { useState, useEffect} from 'react';
import axios from 'axios';
import PlayerTable from "../../components/PlayerTable/PlayerTable";

function PlayersPage () {

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

    useEffect(()=> {
        populateData()
    }, []);

    return (

        <div className="players">
            <h1 className="players__title">PLAYERS</h1>
            <PlayerTable 
            playerData={playerData}
            setPlayerData={setPlayerData}/>
            
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

export default PlayersPage;