import './App.css';
import Header from './Header';
import Nav from './Nav';
import Salad from './Salad';
import Main from './Main';
import Brushetta from './Brushetta';
import Grilled from './GrilledFish';
import Pasta from './Pasta';
import Lemon from './LemonDessert';

console.log("working");
function App() {
  return (
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
  );
}

export default App;
