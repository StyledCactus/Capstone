import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Specials from './Specials';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Booking from './Booking';
import Reservesdown from './ReserveBottom';
import BookNow from './BookNow';
import BookDone from './BookDone';
import Testimonials from './Testimonials';
import Abouts from './About';
import Footer from './footer';


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
        <Specials />
        <Testimonials />
        <Abouts />
        <Footer />
            </>
          } />
          <Route path='/Booking' element={<Booking />} />
          <Route path='/booknow' element={<BookNow />} />
          <Route path='/BookDone' element={<BookDone />} />
        </Routes>
    </>
    </Router>
  );
}



export default App;
