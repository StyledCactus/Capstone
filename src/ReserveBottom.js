import { useNavigate } from 'react-router-dom';

function Reservesdown() {

    const navigate = useNavigate();

    const ReserveClick = () => {
        navigate('/Booking'); 
    };

    return(

        <button className='reserveDown' onClick={ReserveClick}>Reserve a Table</button>

    )
    }


    export default Reservesdown;


