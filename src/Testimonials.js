import prettyGood from './images/prettygood.png'
import shrekback from './images/shrekback.png'
import Sans from './images/Sans.png'


function Testimonials() {
    return(
        <>
        <hr className='testFill' />
        <div className="Tesimdiv">
        <h1 className='pubfed'>Public Feedback</h1>
        <div className='containedallrev'>
        <div className='FirstRev'>
        <div className='containedRev'>
            <h1 className="FirstRevStar">★★★★★</h1>
            <img className="PretGoodRev" src={prettyGood} />
            <h3 className='FirstNamed'>iDubbbz</h3>
            <h3 className='FirstCom'>"Hey, That's Pretty Good!"</h3>
            </div>
            </div>
        <div className='SecondRev'>
        <div className='containedRev'>
            <h1 className='FirstRevStar'>★☆☆☆☆</h1>
            <img className='shrekrev' src={shrekback}/>
            <h3 className='FirstNamed'>Shrek</h3>
            <h3 className='FirstCom'>Oi! Little Lemon's grub was as appealing as a swamp without mud. Not a single onion dish to fancy me taste. Won't be back, not even in haste!</h3>
            </div>
        </div>
            <div className='ThirdRev'>
            <div className='containedRev'>
            <h3 className='FirstRevStar'>★★★☆☆</h3>
            <img className='Sansrev' src={Sans}/>
            <h3 className='FirstNamed'>Sans</h3>
            <h3 className='FirstCom'>Little Lemon? Not bad, but didn't zest up my life. Food's decent; atmosphere's ok. A bit of a sour spot, huh? 3/5 stars. #puns #notboneappetit</h3>
            </div>
        </div>
        <div className='ForthRev'>
        <div className='containedRev'>
            <h3 className='FirstRevStar'>☆☆☆☆☆</h3>
            </div>
        </div>
            </div>
        </div>
        </>
    )
}

export default Testimonials;