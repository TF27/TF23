import './App.css';
import Navbar from './components/Navbar/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/home';
import Compi from './pages/Compi/compi';
import Internal from './pages/Compi_Internal/internal';
import Reg from './pages/Compi_Internal/Reg';

function App() {
    return (
        <div className="App">
            <Router>
                <AuthContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/competitions' element={<Compi />} />
                        {/* <Route path={`${data.name}/register`} element={<Compi_Reg />} /> */}
                        {/* <Route path={`${data.name}`} element={<Compi_Int />} /> */}
                        <Route path='competitions/:compiName' element={<Internal />} />
                        <Route path='competitions/:compiName/register' element={<Reg />} />
                    </Routes>
                </AuthContextProvider>
            </Router>
        </div>
    );
}

export default App;
