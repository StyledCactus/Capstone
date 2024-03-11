import MonikaAproved from "./images/MonikaAproved.png"


function Success(){
    return(
        <div className="sucbox">
            <h1 className="resSuc">Table reserved successfully!</h1>
            <img src={MonikaAproved} className="MonAProved"/>
            <button className="byor">BUY MORE</button>
        </div>
)
}

export default Success;