import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link , useNavigate } from 'react-router-dom';
import App from './App';
import Header from './Header';


function HomeButton() {
    <Router>
        <Route>
            <Route path='/' element={<Header />} />
            <Route path='/HomePage' element={<App />} />
        </Route>
    </Router>
}