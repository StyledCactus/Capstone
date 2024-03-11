import HeaderNow from "./HeaderNow";
import NowNav from "./navNow";
import Reservespot from "./Reservespot";
import Names from "./Names";

function BookNow(){
    return(
        <>
        <HeaderNow/>
        <NowNav />
        <Reservespot />
        <Names />
        <hr className='BOTTEMLINEnow'></hr>
        </>
    )
}


export default BookNow;