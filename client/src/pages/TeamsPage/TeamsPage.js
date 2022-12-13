import "./TeamsPage.scss";
import addTeam from "../../assets/icons/add-team.svg";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import peytonface from "../../assets/images/peytonface.jpeg";
import TeamCard from "../../components/TeamCard/TeamCard";


function TeamsPage() {

    const navigate = useNavigate();

    // pieces of state to handle user authentication
    const [user, setUser] = useState(null)
    const [failedAuth, setFailedAuth] = useState(false);

    // pieces of state to populate My Teams section
    const [myTeams, setMyTeams] = useState([])
    
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
                console.log(response.data);
            })
            .catch((error)=> {
                console.log(error);
                setFailedAuth(true);
            });
    }, []);

    // to handle log out
    const handleLogout =  async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user_id");
        setUser(null);
        setFailedAuth(true);
    };

    if (failedAuth) {
        return (
            <main className="teams">
                <p>You must be logged in to see this page.</p>
                <img src={peytonface} className="teams__not-logged-img" alt="Peyton Manning's disappointed face" />
                <p><Link to="/login">Log in</Link></p>
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

    return (
        <div className="teams">
            <div className="teams__title-con">
                <h1 className="teams__title-con__title">MY TEAMS</h1>
                <div className="teams__title-con__buttons">
                    <button onClick={() => navigate('/createteam')} className="teams__title-con__new-team-button"><img src={addTeam} alt="add team icon" className="teams__title-con__img" />CREATE NEW TEAM</button>
                </div>
                
                {myTeams.map((team)=> {
                    return (
                        <TeamCard
                        props={team}
                        />
                    )
                })}
            </div>
            <button className="teams__title-con__logout" onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default TeamsPage;