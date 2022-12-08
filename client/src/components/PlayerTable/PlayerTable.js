import "./PlayerTable.scss";
import { useEffect, useState } from "react";
import PlayerItem from "../PlayerItem/PlayerItem";
import PlayerTableHeading from "../PlayerTableHeading/PlayerTableHeading";
import axios from 'axios';

function PlayerTable ({ playerData, setPlayerData, nameOrdered, setNameOrdered }) {
    
    useEffect(() => {
        sortByName()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [nameOrdered])

    return (

        <div className="playertable">
            
            <div className="playertable__table">
                <PlayerTableHeading 
                nameOrdered={nameOrdered}
                setNameOrdered={setNameOrdered}/>
               {playerData?.map((player)=> {
                     const {FantasyPointsFanDuel, FirstName, Fumbles, LastName, PassingInterceptions, PassingTouchdowns, PassingYards, PhotoUrl, PlayerID, Position, ReceivingTouchdowns, ReceivingYards, RushingTouchdowns, RushingYards, Team} = player
                     return (
                        <PlayerItem 
                        FantasyPointsFanDuel={FantasyPointsFanDuel}
                        FirstName={FirstName}
                        Fumbles={Fumbles}
                        LastName={LastName}
                        PassingInterceptions={PassingInterceptions}
                        PassingTouchdowns={PassingTouchdowns}
                        PassingYards={PassingYards}
                        PhotoUrl={PhotoUrl}
                        PlayerID={PlayerID}
                        Position={Position}
                        ReceivingTouchdowns={ReceivingTouchdowns}
                        ReceivingYards={ReceivingYards}
                        RushingTouchdowns={RushingTouchdowns}
                        RushingYards={RushingYards}
                        Team={Team}
                        key={PlayerID}
                        /> 
                     )
               })}
            </div>
        </div>
    )

    async function sortByName() {
        let response;
        try {
          if (nameOrdered) response = await axios.get('http://localhost:8080/player/sortByPlayerNameASC')
          else response = await axios.get('http://localhost:8080/player/sortByPlayerNameDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }
}

export default PlayerTable;