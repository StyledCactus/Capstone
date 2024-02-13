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
import { Link , useNavigate } from 'react-router-dom';
import Test from './TestPage';
import Cart from './Cart';



console.log("working");
function App() {
  return (
    <Router>
    <>
        <Header />

        

        <Nav />
        <Main />
        <Salad />
        <Brushetta />
        <Grilled />
        <Pasta />
        <Lemon />
    </>
    </Router>
  );
}

export default App;
