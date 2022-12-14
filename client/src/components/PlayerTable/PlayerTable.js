import "./PlayerTable.scss";
import { useEffect } from "react";
import PlayerItem from "../PlayerItem/PlayerItem";
import PlayerTableHeading from "../PlayerTableHeading/PlayerTableHeading";
import axios from 'axios';

function PlayerTable ({ playerData, setPlayerData, nameOrdered, setNameOrdered, fanpointsOrdered, setFanpointsOrdered, passyardsOrdered, setPassyardsOrdered, passtdsOrdered, setPasstdsOrdered, intOrdered, setIntOrdered, rushyardsOrdered, setRushyardsOrdered, rushtdsOrdered, setRushtdsOrdered, receiveyardsOrdered, setReceiveyardsOrdered, receivetdsOrdered, setReceivetdsOrdered, fumblesOrdered, setFumblesOrdered, addPlayer }) {
    
    const API_URL = process.env.REACT_APP_API_URL
    console.log(API_URL)

    useEffect(() => {
        sortByName()
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [nameOrdered])

    useEffect(()=> {
        sortByFanPoints()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fanpointsOrdered])

    useEffect(()=> {
        sortByPassYards()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [passyardsOrdered])

    useEffect(()=> {
        sortByPassTds()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [passtdsOrdered])

    useEffect(()=> {
        sortByINTs()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [intOrdered])

    useEffect(()=> {
        sortByRushYards()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rushyardsOrdered])

    useEffect(()=> {
        sortByRushTds()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [rushtdsOrdered])

    useEffect(()=> {
        sortByRecYards()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [receiveyardsOrdered])

    useEffect(()=> {
        sortByRecTds()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [receivetdsOrdered])

    useEffect(()=> {
        sortByFumbles()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fumblesOrdered])

    return (
        <div className="playertable">
              <div className="playertable__table__heading--desktop">
                <PlayerTableHeading
                  setNameOrdered={setNameOrdered}
                  setFanpointsOrdered={setFanpointsOrdered}
                  setPassyardsOrdered={setPassyardsOrdered}
                  setPasstdsOrdered={setPasstdsOrdered}
                  setIntOrdered={setIntOrdered}
                  setRushyardsOrdered={setRushyardsOrdered}
                  setRushtdsOrdered={setRushtdsOrdered}
                  setReceiveyardsOrdered={setReceiveyardsOrdered}
                  setReceivetdsOrdered={setReceivetdsOrdered}
                  setFumblesOrdered={setFumblesOrdered}
                  />
              </div>
            <div className="playertable__table">
              <div className="playertable__table__heading--mobile">
                <PlayerTableHeading
                setNameOrdered={setNameOrdered}
                setFanpointsOrdered={setFanpointsOrdered}
                setPassyardsOrdered={setPassyardsOrdered}
                setPasstdsOrdered={setPasstdsOrdered}
                setIntOrdered={setIntOrdered}
                setRushyardsOrdered={setRushyardsOrdered}
                setRushtdsOrdered={setRushtdsOrdered}
                setReceiveyardsOrdered={setReceiveyardsOrdered}
                setReceivetdsOrdered={setReceivetdsOrdered}
                setFumblesOrdered={setFumblesOrdered}
                />
              </div>
               {playerData?.map((player)=> {
                     const {FantasyPointsFanDuel, FirstName, Fumbles, LastName, PassingInterceptions, PassingTouchdowns, PassingYards, PhotoUrl, PlayerID, Position, ReceivingTouchdowns, ReceivingYards, RushingTouchdowns, RushingYards, Team} = player
                     return (
                        <PlayerItem 
                        addPlayer={addPlayer}
                        player={player}
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
    
    async function sortByFanPoints() {
        let response;
        try {
          if (fanpointsOrdered) response = await axios.get('http://localhost:8080/player/sortByFanPointsASC')
          else response = await axios.get('http://localhost:8080/player/sortByFanPointsDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    async function sortByPassYards() {
        let response;
        try {
          if (passyardsOrdered) response = await axios.get('http://localhost:8080/player/sortByPassingYardsASC')
          else response = await axios.get('http://localhost:8080/player/sortByPassingYardsDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    async function sortByPassTds() {
        let response;
        try {
          if (passtdsOrdered) response = await axios.get('http://localhost:8080/player/sortByPassingTDsASC')
          else response = await axios.get('http://localhost:8080/player/sortByPassingTDsDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    async function sortByINTs() {
        let response;
        try {
          if (intOrdered) response = await axios.get('http://localhost:8080/player/sortByINTsASC')
          else response = await axios.get('http://localhost:8080/player/sortByINTsDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    async function sortByRushYards() {
        let response;
        try {
          if (rushyardsOrdered) response = await axios.get('http://localhost:8080/player/sortByRushingYardsASC')
          else response = await axios.get('http://localhost:8080/player/sortByRushingYardsDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    async function sortByRushTds() {
        let response;
        try {
          if (rushtdsOrdered) response = await axios.get('http://localhost:8080/player/sortByRushingTDsASC')
          else response = await axios.get('http://localhost:8080/player/sortByRushingTDsDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    async function sortByRecYards() {
        let response;
        try {
          if (receiveyardsOrdered) response = await axios.get('http://localhost:8080/player/sortByReceivingYardsASC')
          else response = await axios.get('http://localhost:8080/player/sortByReceivingYardsDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    async function sortByRecTds() {
        let response;
        try {
          if (receivetdsOrdered) response = await axios.get('http://localhost:8080/player/sortByReceivingTDsASC')
          else response = await axios.get('http://localhost:8080/player/sortByReceivingTDsDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }

    async function sortByFumbles() {
        let response;
        try {
          if (fumblesOrdered) response = await axios.get('http://localhost:8080/player/sortByFumblesASC')
          else response = await axios.get('http://localhost:8080/player/sortByFumblesDESC')
          setPlayerData(response.data)
        } catch (error) {
          console.log(error)
        }
      }
}

export default PlayerTable;