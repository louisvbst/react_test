import { BrowserRouter as Router, Routes, Route }
from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import TodoList from './components/TodoList';
import Home from './components/menus/index';
import About from './components/menus/about';
import Calendar from './components/menus/blogs';
import SignUp from './components/menus/signup';
import Contact from './components/menus/contact';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<TodoList />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default App;
