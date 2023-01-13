import "./TeamsPage.scss";
import addTeam from "../../assets/icons/add-team.svg";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import peytonface from "../../assets/images/peytonface.jpeg";
import TeamCard from "../../components/TeamCard/TeamCard";


function TeamsPage() {

    const API_URL = process.env.REACT_APP_API_URL;

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
        axios.get(`${API_URL}/user/currentUser`, {
            headers: {
                Authorization: `Bearer: ${token}`
            }
        })
        // to populate teams created by user
            .then((response)=> {
                setUser(response.data);
                sessionStorage.setItem("user_id", response.data.id)
                return axios.get(`${API_URL}/teams/${response.data.id}`)
            })
            .then((response)=> {
                setMyTeams(response.data);
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

    
    return (
        <div className="teams">
            <h1 className="teams__title">MY TEAMS</h1>
            <div className="teams__title-con">
            {myTeams.length < 1 && <p className="teams__title-con__noteams">You haven't created a team yet, Coach!</p>}
            {myTeams.length < 1 && <p className="teams__title-con__noteams">Click the button below to get started.</p>}
                <div className="teams__title-con__buttons">
                    <button onClick={() => navigate('/createteam')} className="teams__title-con__new-team-button"><img src={addTeam} alt="add team icon" className="teams__title-con__img" />CREATE NEW TEAM</button>
                </div>
                <div className="teams__title-con__desktop">
                    {myTeams.map((team, index)=> {
                    return (
                        <TeamCard
                        props={team}
                        key={index}
                        />
                    )
                    })}
                </div>
                
                <div className="teams__title-con__logout">
                    <button className="teams__title-con__logout__button" onClick={handleLogout}>Log out</button>
                </div>
            </div>
        </div>
    )
}

export default TeamsPage;