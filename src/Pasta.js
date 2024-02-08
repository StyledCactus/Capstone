import PastaImage from './images/Pasta.png';

function Pasta() {

    return(
        <div className='Pasta'>
            <h2 className='PastaNm'>Pasta</h2>
            <h2 className='PastaDesc'>Add description</h2>
            <img className='PastaImg' src={PastaImage}></img>
            <h2 className='PastaPrice'>$18.99</h2>
            <hr className='lineFour'></hr>
        </div>
    )
}

export default Pasta;