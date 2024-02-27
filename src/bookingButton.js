import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link , useNavigate } from 'react-router-dom';
import Booking from './Booking';
import Nav from './Nav';

function bookingButton(){
    <Router>
        <Routes>
            <Route path='/' element={<Nav />}/>
            <Route path='/Booking' element={<Booking />} />
        </Routes>
    </Router>
}

export default bookingButton;