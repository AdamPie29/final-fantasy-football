import "./PlayerTableHeading.scss";

function PlayerTableHeading ({ setNameOrdered }) {

    return (
        <div className="heading">
            <button onClick={() => setNameOrdered(prev => !prev)}className="heading__title heading__title-name">Name</button>
            <button className="heading__title">Fan Points</button>
            <button className="heading__title">Pass Yds</button>
            <button className="heading__title">Pass TDs</button>
            <button className="heading__title">INTs</button>
            <button className="heading__title">Rush Yds</button>
            <button className="heading__title">Rush TDs</button>
            <button className="heading__title">Rec Yds</button>
            <button className="heading__title">Rec TDs</button>
            <button className="heading__title">Fum.</button>
        </div>
    )
}

export default PlayerTableHeading;