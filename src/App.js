import './App.css';
import Header from './Header';
import Nav from './Nav';
import Salad from './Salad';
import Main from './Main';
import Brushetta from './Brushetta';
import Grilled from './GrilledFish';
import Pasta from './Pasta';
import Lemon from './LemonDessert';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Booking from './Booking';
import Reservesdown from './ReserveBottom';



console.log("App working");
function App() {
  return (
    <Router>
    <>

        <Routes>
          <Route path='/' element={
            <>
            <Header />
        <Nav />
        <Main />
        <Salad />
        <Brushetta />
        <Grilled />
        <Pasta />
        <Lemon />
        <Reservesdown />
        <hr className='BOTTEMLINEapp'></hr>
            </>
          } />
          <Route path='/Booking' element={<Booking />} />
        </Routes>
    </>
    </Router>
  );
}

export default App;
