import './App.css';
import React from 'react';
import Header from './components/Navbar/Header';
import { AuthContextProvider } from './contexts/AuthContext';
import Protected from './contexts/Protected';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/home';
import Exhibition from './pages/Exhibition/exhi';
import Compi from './pages/Compi/compi';
import CompiInternal from './pages/Compi/Compi_Internal/index';
import Reg from './pages/Compi/Compi_Internal/Reg';
import Create_Team from './pages/Compi/Compi_Internal/Teams/create_team';
import JoinTeam from './pages/Compi/Compi_Internal/Teams/join_team';
import Gallery from './pages/AboutUs/gallery/gallery';
import Workshop from './pages/workshop/home';
import Summit from './pages/Summit/home.js';

// const Lectures = React.lazy(() => import('./pages/Lectures/index'));
import Lecture_gal from './pages/AboutUs/gallery/specific/lecture';
import Exhibition_gal from './pages/AboutUs/gallery/specific/exhibiton';
import Ozone_gal from './pages/AboutUs/gallery/specific/ozone';
import Compi_gal from './pages/AboutUs/gallery/specific/compi';
import Techno_gal from './pages/AboutUs/gallery/specific/techno';
import Robowar_gal from './pages/AboutUs/gallery/specific/Robowar';
import Explore from './pages/workshop/components/Explore';
import Recognition from './pages/AboutUs/recognition/Recognition';
import Legals from './pages/AboutUs/legals';


// import Lectures  from './pages/Lectures/index';
const Lectures = React.lazy(() => import('./pages/Lectures/index'));
const Media = React.lazy(() => import('./pages/AboutUs/Media/index'));
const History = React.lazy(() => import('./pages/AboutUs/history/history'));


function App() {

    return (
        <div className="App">
            <Router>
                <AuthContextProvider>
                    {/* <Navbar />*/}
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/exhibitions' element={<Exhibition/>}/>
                        <Route path='/competitions' element={<Compi />} />
                        <Route path='/workshops' element={<Workshop/>}/>
                        <Route path='/lectures' element={<Lectures />} />
                        <Route path='/workshops/:cardName' element={<Explore/>} />
                        {/* <Route path='/lectures' element={
                        {/* <Route path='/lectures' element={<Lectures />} /> */}
                        <Route path='/explore' element={<Explore/>} />
                        <Route path='/recognition' element={<Recognition/>} />
                        <Route path='/lectures' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Lectures/>
                        </React.Suspense> }/>

                        <Route path='/Media' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Media/>
                        </React.Suspense> }/>

                        <Route path='/History' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <History/>
                        </React.Suspense> }/>

                        <Route path='/summits' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Summit/>
                        </React.Suspense> }/>

                        <Route path='/legals' element={<Legals /> } />
                        

                        <Route path='competitions/:compiName' element={<CompiInternal />} />
                        <Route path='competitions/:compiName/register' element={<Protected><Reg /></Protected>} />
                        <Route path='competitions/:compiName/createTeam' element={<Protected><Create_Team  /></Protected>} />
                        <Route path='competitions/:compiName/joinTeam' element={<Protected><JoinTeam  /></Protected>} />

                        <Route path='/gallery' element={<Gallery/>} />
                        <Route path='/gallery/lectures' element={<Lecture_gal/>} />    
                        <Route path='/gallery/exhibition' element={<Exhibition_gal/>} /> 
                        <Route path='/gallery/ozone' element={<Ozone_gal/>} /> 
                        <Route path='/gallery/compi' element={<Compi_gal/>} /> 
                        <Route path='/gallery/robowars' element={<Robowar_gal/>} /> 
                        <Route path='/gallery/technoholix' element={<Techno_gal/>} /> 
                    </Routes>
                </AuthContextProvider>
            </Router>
        </div>
    );
}

export default App;
