import LemonDessert from './images/LemonDessert.png'

function Lemon(){
    return(
        <div className='Lemondiv'>
            <h2 className='LemonNm'>Lemon Dessert</h2>
            <h2 className='LemonDesc'>Add description</h2>
            <img className='LemonImg' src={LemonDessert}></img>
            <h2 className='LemonPrice'>$6.99</h2>
            <hr className='lineFive'></hr>
        </div>
    )
}

export default Lemon;