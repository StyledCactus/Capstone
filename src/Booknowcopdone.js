import HeaderNow from "./HeaderNow";
import NowNav from "./navNow";
import Reservespot from "./Reservespot";
import Names from "./Names";

function BookNowDone(){
    return(
        <>
        <div className="makeblur">
        <HeaderNow/>
        <NowNav />
        <Reservespot />
        <Names />
        </div>
        </>
    )
}


export default BookNowDone;