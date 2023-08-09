import './App.css';
import Navbar from './components/Navbar/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/home';
import WorldMap from './pages/Exhibition/map';
import Compi from './pages/Compi/compi';
import Internal from './pages/Compi/Compi_Internal/internal';
import Reg from './pages/Compi/Compi_Internal/Reg';
import Create_Team from './pages/Compi/Compi_Internal/Teams/create_team';
import JoinTeam from './pages/Compi/Compi_Internal/Teams/join_team';
import Gallery from './pages/gallery/gallery';
import Gallery_prop from './pages/gallery/specific/gallery_prop';



function App() {
    return (
        <div className="App">
            <Router>
                <AuthContextProvider>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/exhibitions' element={<WorldMap/>}/>
                        <Route path='/competitions' element={<Compi />} />
                        {/* <Route path={`${data.name}/register`} element={<Compi_Reg />} /> */}
                        {/* <Route path={`${data.name}`} element={<Compi_Int />} /> */}
                        <Route path='competitions/:compiName' element={<Internal />} />
                        <Route path='competitions/:compiName/register' element={<Reg />} />
                        <Route path='competitions/:compiName/createTeam' element={<Create_Team  />} />
                        <Route path='competitions/:compiName/joinTeam' element={<JoinTeam  />} />

                        <Route path='/gallery' element={<Gallery/>} />
                        <Route path='/gallery/lectures' element={<Gallery_prop/>} />    
                    </Routes>
                </AuthContextProvider>
            </Router>
        </div>
    );
}

export default App;
