import './App.css';
import greeksalad from './images/greeksalad.jpg';
import brushetta from './images/brushetta.png'
import LemonDessert from './images/LemonDessert.png'

function Specials() {

    return(
        <>
        <div className='AllSpecCont'>
        <div className='SpecialCont'>
        <div className='Salad'>
            <h2 className='SaladNm'>Greek Salad</h2>
            <h2 className='SaladDesc'>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </h2>
            <img className='SaladImg' src={greeksalad}></img>
            <h2 className='SaladPrice'>$12.99</h2>
            <button className='ordDelivOne'>Order a Delivery</button>
        </div>
        <div className='brushBase'>
            <h2 className='brushNm'>Brushetta</h2>
            <h2 className='brushDesc'>Try our Bruschetta: grilled garlic bread seasoned with salt & olive oil. Topped with tomato, veggies, beans, pork, or cheese. Made on a brustolina grill in Italy.</h2>
            <img className='brushImg' src={brushetta}></img>
            <h2 className='brushPrice'>$7.99</h2>
            <button className='ordDelivTwo'>Order a Delivery</button>
        </div>
        <div className='Lemondiv'>
            <h2 className='LemonNm'>Lemon Dessert</h2>
            <h2 className='LemonDesc'>Indulge in our Lemon Dessert: a zesty delight with fresh lemon juice, sweetened with honey, atop a buttery crust. The perfect tangy treat!</h2>
            <img className='LemonImg' src={LemonDessert}></img>
            <h2 className='LemonPrice'>$6.99</h2>
            <button className='ordDelivThree'>Order a Delivery</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default Specials;