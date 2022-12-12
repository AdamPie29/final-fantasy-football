import "./TeamsPage.scss";
import addTeam from "../../assets/icons/add-team.svg";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";



function TeamsPage() {

    const navigate = useNavigate();

    // pieces of state to handle user authentication
    const [user, setUser] = useState(null)
    const [failedAuth, setFailedAuth] = useState(false);
    
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
            .then((response)=> {
                setUser(response.data);
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
        setUser(null);
        setFailedAuth(true);
    };

    if (failedAuth) {
        return (
            <main className="teams">
                <p>You must be logged in to see this page.</p>
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
                <button onClick={() => navigate('/createteam')} className="teams__title-con__new-team-button"><img src={addTeam} alt="add team icon" className="teams__title-con__img" />CREATE NEW TEAM</button>
                <button className="teams__title-con__logout" onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )


}

export default TeamsPage;