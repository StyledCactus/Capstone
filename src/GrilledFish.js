import GrilledFishImage from './images/grilledfish.png';

function Grilled() {

    return(
        <div className="GrilledFish">
            <h2 className="GrilledFishNm">Grilled Fish</h2>
            <h2 className="GrilledFishDesc">Grilled fish is the embodiment of simplicity and satisfaction. No frills, no fuss. Just a slab of aquatic excellence cooked over an open flame, delivering flavor that speaks for itself. It's nature's gift on a plate, and any man worth his salt should know how to appreciate it.</h2>
            <img className="GrilledFishImg" src={GrilledFishImage} alt='Grilled Fish'></img>
            <h2 className="GrilledFishPrice">$20.00</h2>
            <hr className="lineThree"></hr>
        </div>
    )
}

export default Grilled;