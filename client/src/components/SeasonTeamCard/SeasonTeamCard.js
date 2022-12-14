import "./SeasonTeamCard.scss";
import axios from 'axios';
import { useState, useEffect } from "react";
import SeasonRecord from "../SeasonRecord/SeasonRecord";
import SeasonModeModal from "../SeasonModeModal/SeasonModeModal";

function SeasonTeamCard ({props}) {

    const [compTeams, setCompTeams] = useState([])

    const [record, setRecord] = useState([])

    const [show, setShow] = useState(false);

    // const handleClick = (status) => {
    //     setShow(status)
    // }

    const close = () => {
        setShow(false)
    }

   
    useEffect(()=> {
        axios.get('http://localhost:8080/teams/enemyteams')    
            .then((response)=> {
            setCompTeams(response.data);
            console.log(response.data);
        })
        .catch((error)=> {
        console.log(error);  
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    let winCounter = 0
    let loseCounter = 0


    const getStats = (status) => {

        const compDataBig = compTeams

        const compData = compTeams[0]

        for (let i=0; i<compDataBig.length; i++) {

            // User Team
            const teamData = props

            let statsArray = []

            let passingTDs = 0
            let passingYDs = 0
            let rushTDs = 0
            let rushYDs = 0
            let recTDs = 0
            let recYDs = 0

            passingTDs += teamData[0].PassingTouchdowns
            passingYDs += teamData[1].PassingYards
            rushTDs += teamData[2].RushingTouchdowns
            rushYDs += teamData[3].RushingYards
            recTDs += teamData[4].ReceivingTouchdowns
            recYDs += teamData[5].ReceivingYards

            console.log(`passing TDs: ${passingTDs}`)
            console.log(`passing yards: ${passingYDs}`)
            console.log(`rushing TDs: ${rushTDs}`)
            console.log(`rushing yardss: ${rushYDs}`)
            console.log(`receiving TDs: ${recTDs}`)
            console.log(`receiving yards: ${recYDs}`)
            
            statsArray.push(passingTDs, passingYDs, rushTDs, rushYDs, recTDs, recYDs)
            console.log(`stats array: ${statsArray}`)

            for (let i=0; i < statsArray.length; i++) {
                let randomly = Math.floor(Math.random() * 6) + 1
                statsArray[i]*=randomly
            }
            console.log(`statsarray after randomize: ${statsArray} ${statsArray.length}`)

            let gamestats = []
            for (let i=0; i<statsArray.length; i++) {
                gamestats.push(Math.round(statsArray[i]/15))
            }

            console.log(`gamestats: ${gamestats}`)
            console.log(`statsarray before end of game: ${statsArray} ${statsArray.length}`)
            statsArray = []
            console.log(`statsarray after clear: ${statsArray} ${statsArray.length}`)

            let fanstats = []

            let passTDFpoints = 0
            let passYDFpoints = 0
            let rushTDFpoints = 0
            let rushYDFpoints = 0
            let recTDFpoints = 0
            let recYDFpoints = 0

            fanstats.push(passTDFpoints += gamestats[0]*4)
            fanstats.push(passYDFpoints += gamestats[1]/25)
            fanstats.push(rushTDFpoints += gamestats[2]*6)
            fanstats.push(rushYDFpoints += gamestats[3]/10)
            fanstats.push(recTDFpoints += gamestats[4]*6)
            fanstats.push(recYDFpoints += gamestats[5]/10)

            console.log(`this is fanstats ${fanstats}`)

            const totalpoints = fanstats.reduce((partialSum, a) => partialSum + a, 0);
            console.log(totalpoints)

            // Computer Team
            

            let compStatsArray = []

            let cpPassingTDs = 0
            let cpPassingYDs = 0
            let cpRushTDs = 0
            let cpRushYDs = 0
            let cpRecTDs = 0
            let cpRecYDs = 0

            cpPassingTDs += compData[0].PassingTouchdowns
            cpPassingYDs += compData[1].PassingYards
            cpRushTDs += compData[2].RushingTouchdowns
            cpRushYDs += compData[3].RushingYards
            cpRecTDs += compData[4].ReceivingTouchdowns
            cpRecYDs += compData[5].ReceivingYards

            compStatsArray.push(cpPassingTDs, cpPassingYDs, cpRushTDs, cpRushYDs, cpRecTDs, cpRecYDs)
            
            for (let i=0; i<compStatsArray.length; i++) {
                let randomer = Math.floor(Math.random() * 6) + 1
                compStatsArray[i] *= randomer
            }

            let cpGameStats = []

            for(let i=0; i<compStatsArray.length; i++) {
                cpGameStats.push(Math.round(compStatsArray[i]/15))
            }

            compStatsArray = []

            let cpFanstats = []

            let cpPassTDFpoints = 0
            let cpPassYDFpoints = 0
            let cpRushTDFpoints = 0
            let cpRushYDFpoints = 0
            let cpRecTDFpoints = 0
            let cpRecYDFpoints = 0

            cpFanstats.push(cpPassTDFpoints += cpGameStats[0]*4)
            cpFanstats.push(cpPassYDFpoints += cpGameStats[1]/25)
            cpFanstats.push(cpRushTDFpoints += cpGameStats[2]*6)
            cpFanstats.push(cpRushYDFpoints += cpGameStats[3]/10)
            cpFanstats.push(cpRecTDFpoints += cpGameStats[4]*6)
            cpFanstats.push(cpRecYDFpoints += cpGameStats[5]/10)

            const cpTotalPoints = cpFanstats.reduce((partialSum, a) => partialSum + a, 0);
            console.log(cpTotalPoints)

            if (totalpoints > cpTotalPoints) {
                winCounter +=1
            } else {
                loseCounter +=1
            }
            let teamRecord = `${winCounter} - ${loseCounter}`
            setRecord(teamRecord)
            
            console.log(`${winCounter} - ${loseCounter}`)
            console.log(record)

            setShow(status)

        }
        
    }

    return (
        <div className="sb">
            <SeasonModeModal
                onClose={close}
                show={show}
                />
            <button className="sb__team" onClick={getStats}>{props[0].TeamName}</button>
            <div>
                <SeasonRecord
                record={record}
                />
            </div>
        </div>
        
    )
}

export default SeasonTeamCard;