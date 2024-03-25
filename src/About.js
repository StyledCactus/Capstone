import MarioAdrian from './images/MarioAdrian.png'
import MarioAdrian2 from './images/MarioAdrian2.png'


function Abouts() {

        return(
            <>
            <div className="aboutsdiv">
                <div className='aboutsContain'>
                <h1 className='aboutlm'>Little Lemon</h1>
                <h2 className='aboutchic'>Chicago</h2>
                <h3 className='aboutdescone'>Little Lemon's run by Mario and Adrian, two Italian brothers with a big American dream of their own eatery.</h3>
                <h3 className='aboutdesctwo'>Mario digs into family cookbooks and his chef days in Italy for the menu, while Adrian's the brains behind spreading the word and spicing things up with flavors from across the Mediterranean.</h3>
                <img className='MarioAdone' src={MarioAdrian} />
                <img className='MarioAdtwo' src={MarioAdrian2} />
                </div>
            </div>
            </>
        )

}

export default Abouts;