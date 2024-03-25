import resturant from './images/restaurant.png'

function Footer() {

return(
    <>
    <div className="footercredbook">
<div className="footcontained">
    <img className='footimg' src={resturant}></img>

        <div className="firstcred">
        <h1>Little Lemon</h1>
        <a className='homecred'>Home</a>
        <a className='menucred'>Menu</a>
        <a className='reservcred'>Reservations</a>
        <a className='ordercred'>Order Online</a>
        <a className='logcred'>Login</a>
        </div>

        <div className="secondcred">
        <h1>Contact</h1>
        <h1 className='locacred'>Little Lemon
        331 E Chicago
        LaSalle Street Chicago,
        Illinois 60602
        USA</h1>
        <a className='numcred'>+55 11 9999-9999</a>
        <a className='emcred'>contact@littlelemon.com</a>
        </div>

        <div className="thirdcred">
        <h1>Social Media</h1>
        <a>Facebook</a>
        <a className='instacred'>Instagram</a>
        <a className='twitcred'>Twitter</a>
        </div>

        <div className="botcred">
        <h1 className='botcredone'>Developed by _TheCactusGuy_.</h1>
        <h1 className='botcredtwo'>© 2023 Little Lemon. All rights reserved.</h1>
         </div> 
         </div>
    </div>
    </>
)
}

export default Footer;