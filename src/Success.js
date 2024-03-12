import { useNavigate } from "react-router-dom";
import MonikaAproved from "./images/MonikaAproved.png"

function Success(){

    const Navigate = useNavigate();

    const toStart = () => {
        Navigate('/');
    }

    return(
        <div className="sucbox">
            <h1 className="resSuc">Table reserved successfully!</h1>
            <img src={MonikaAproved} className="MonAProved"/>
            <button className="byor" onClick={toStart}>BUY MORE</button>
        </div>
)
}

export default Success;