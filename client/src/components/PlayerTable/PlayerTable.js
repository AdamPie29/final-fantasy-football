import "./PlayerTable.scss";
import { useEffect, useState } from "react";
import PlayerItem from "../PlayerItem/PlayerItem";

function PlayerTable ({ playerData }) {
    
    return (

        <div className="playertable">
            
            <div className="playertable__table">
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
                        />
                     )
               })}
            </div>


        </div>

    )
}

export default PlayerTable;