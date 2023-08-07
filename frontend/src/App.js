import './App.css';
import Navbar from './components/Navbar/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/home';
import Exhibition from './pages/Exhibition/exhi';
import Compi from './pages/Compi/compi';
import Internal from './pages/Compi_Internal/internal';
import Reg from './pages/Compi_Internal/Reg';
import Create_Team from './pages/Compi_Internal/Teams/create_team';
import JoinTeam from './pages/Compi_Internal/Teams/join_team';


function App() {
    return (
        <div className="App">
            <Router>
                <AuthContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/exhibitions' element={<Exhibition/>}/>
                        <Route path='/competitions' element={<Compi />} />
                        {/* <Route path={`${data.name}/register`} element={<Compi_Reg />} /> */}
                        {/* <Route path={`${data.name}`} element={<Compi_Int />} /> */}
                        <Route path='competitions/:compiName' element={<Internal />} />
                        <Route path='competitions/:compiName/register' element={<Reg />} />
                        <Route path='competitions/:compiName/createTeam' element={<Create_Team  />} />
                        <Route path='competitions/:compiName/joinTeam' element={<JoinTeam  />} />
                    </Routes>
                </AuthContextProvider>
            </Router>
        </div>
    );
}

export default App;
