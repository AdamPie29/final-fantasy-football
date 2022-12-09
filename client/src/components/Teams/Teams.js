import "./Teams.scss";
import axios from 'axios';
import { useEffect, useState } from "react";

function Teams () {

    const [teamData, setTeamData] = useState()

    useEffect(()=> {
        axios.get("http://localhost:8080/allteams")
    }, [])

    return (
        <div className="teams">
            <div className="teams__cards">
                {teamData?.map((team)=> {
                    const {}
                })}

            </div>

        </div>
    )

};

export default Teams;

