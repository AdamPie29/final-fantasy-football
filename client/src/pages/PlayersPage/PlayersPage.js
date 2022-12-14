import "./PlayersPage.scss";
import { useState, useEffect} from 'react';
import axios from 'axios';
import PlayerTable from "../../components/PlayerTable/PlayerTable";
import PlayerTableHeading from "../../components/PlayerTableHeading/PlayerTableHeading";

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
            <div className="players__desktop">
                <h1 className="players__desktop__title">PLAYERS</h1>
            </div>
            <PlayerTable 
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