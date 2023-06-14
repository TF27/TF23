import './App.css';
import Navbar from './components/Navbar/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/home';
import Compi from './pages/Compi/compi';

function App() {
    return (
        <div className="App">
            <Router>
                <AuthContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/competitions' element={<Compi />} />
                    </Routes>
                </AuthContextProvider>
            </Router>
        </div>
    );
}

export default App;
