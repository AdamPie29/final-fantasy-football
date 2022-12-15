import "./SeasonModeModal.scss";
import ReactDOM from "react-dom";
import playGame from "../../assets/images/playGame.gif";

function SeasonModeModal ({onClose, show}) {

    if (!show) {
        return null
    }

    const handleSubmit = () => {
        onClose();
    }

    return ReactDOM.createPortal(
        <div className="sim-container">
            <img className="sim-container__modal" onClick={handleSubmit} src={playGame} alt="gif of football game representing playing a game" />

        </div>,
        document.getElementById('portal')
    )
}

export default SeasonModeModal;