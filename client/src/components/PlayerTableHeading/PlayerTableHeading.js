import "./PlayerTableHeading.scss";

function PlayerTableHeading ({ setNameOrdered, setFanpointsOrdered, setPassyardsOrdered, setPasstdsOrdered, setIntOrdered, setRushyardsOrdered, setRushtdsOrdered, setReceiveyardsOrdered, setReceivetdsOrdered, setFumblesOrdered }) {

    return (
        <div className="heading">
            <button onClick={() => setNameOrdered(prev => !prev)}className="heading__title heading__title-name">Name</button>
            <button onClick={() => setFanpointsOrdered(prev => !prev)} className="heading__title">Fan Points</button>
            <button onClick={() => setPassyardsOrdered(prev => !prev)} className="heading__title">Pass Yds</button>
            <button onClick={()=> setPasstdsOrdered(prev => !prev)} className="heading__title">Pass TDs</button>
            <button onClick={()=> setIntOrdered(prev => !prev)} className="heading__title">INTs</button>
            <button onClick={()=> setRushyardsOrdered(prev => !prev)} className="heading__title">Rush Yds</button>
            <button onClick={()=> setRushtdsOrdered(prev => !prev)} className="heading__title">Rush TDs</button>
            <button onClick={()=> setReceiveyardsOrdered(prev => !prev)} className="heading__title">Rec Yds</button>
            <button onClick={()=> setReceivetdsOrdered(prev => !prev)} className="heading__title">Rec TDs</button>
            <button onClick={()=> setFumblesOrdered(prev => !prev)} className="heading__title">Fum.</button>
        </div>
    )
}

export default PlayerTableHeading;