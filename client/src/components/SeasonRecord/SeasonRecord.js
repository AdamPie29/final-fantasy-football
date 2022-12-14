import "./SeasonRecord.scss";

function SeasonRecord ({record}) {

    return (
        <>
        <div className="record">
            <div className="record__stat">{record}</div>
        </div>
            
        </>
        
    )
}

export default SeasonRecord;