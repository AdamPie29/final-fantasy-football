import "./SeasonModePage.scss";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import peytonface from "../../assets/images/peytonface.jpeg";
import SeasonTeamCard from "../../components/SeasonTeamCard/SeasonTeamCard";

function SeasonModePage ({option, selected, onChange}) {

    // pieces of state to handle user authentication
    const [user, setUser] = useState(null)
    const [failedAuth, setFailedAuth] = useState(false);

    // pieces of state to populate My Teams section
    const [myTeams, setMyTeams] = useState([])

    // pieces of state to populate Computer teams
    const [compTeams, setCompTeams] = useState([])
   
    // to deny access to page if not logged in
    useEffect(()=> {
        const token = sessionStorage.getItem("token");

        if(!token) {
            return setFailedAuth(true)
        }

        // get the data from the server
        axios.get('http://localhost:8080/user/currentUser', {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        })
        // to populate teams created by user
            .then((response)=> {
                setUser(response.data);
                sessionStorage.setItem("user_id", response.data.id)
                return axios.get(`http://localhost:8080/teams/${response.data.id}`)
            })
            .then((response)=> {
                setMyTeams(response.data);
                // to populate Computer's teams to play season
                return axios.get('http://localhost:8080/teams/enemyteams')
            })    
            .then((response)=> {
                setCompTeams(response.data);
            })
            .catch((error)=> {
                console.log(error);
                setFailedAuth(true);
            });
    }, []);

    if (failedAuth) {
        return (
            <main className="teams">
                <p className="teams__not-logged-title">You must be logged in to see this page.</p>
                <img src={peytonface} className="teams__not-logged-img" alt="Peyton Manning's disappointed face" />
                <Link to="/login"><button className="teams__not-logged-button">Log in</button></Link>
                <p className="teams__not-logged-text">or...</p>
                <Link to="/signup"><button className="teams__not-logged-button">Sign up now!</button></Link>
            </main>
        );
    }

    if (user === null) {
        return (
            <main className="teams">
                <p>Loading...</p>
            </main>
        );
    }

    // Actual Page Contents
    return (
        <div className="season">
            <div id="portal" />
                <div className="season__title">
                    <h1 className="season__title__text">SEASON MODE</h1>
                </div>
                <div className="season__desc">
                    <p className="season__desc__text">Test your teams in a full season simulation!</p>
                    <p className="season__desc__text">Select a team and discover how great a Coach you truly are.</p>
                </div>
            <div className="season__choose-team">
                {myTeams.map((team)=> {
                return (
                    <SeasonTeamCard
                    props={team}
                    key={team.PlayerID}
                    />
                )
                })}               
            </div>
        </div>
    )
}

export default SeasonModePage;