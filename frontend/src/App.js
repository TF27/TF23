import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { AuthContextProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/home';
import Exhibition from './pages/Exhibition/exhi';
import Compi from './pages/Compi/compi';
import Internal from './pages/Compi/Compi_Internal/internal';
import Reg from './pages/Compi/Compi_Internal/Reg';
import Create_Team from './pages/Compi/Compi_Internal/Teams/create_team';
import JoinTeam from './pages/Compi/Compi_Internal/Teams/join_team';
import Gallery from './pages/AboutUs/gallery/gallery';
import Gallery_prop from './pages/AboutUs/gallery/specific/gallery_prop';
import Workshop from './pages/workshop/home';
// import Lectures  from './pages/Lectures/index';
const Lectures = React.lazy(() => import('./pages/Lectures/index'));
const Media = React.lazy(() => import('./pages/AboutUs/Media/index'))

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
                        <Route path='/workshops' element={<Workshop/>}/>

                        <Route path='/lectures' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Lectures/>
                        </React.Suspense> }/>

                        <Route path='/Media' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Media/>
                        </React.Suspense> }/>

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
