import './App.css';
import React ,{useState,useEffect}from 'react';
import Header from './components/Navbar/Header';
import { AuthContextProvider } from './contexts/AuthContext';
import Protected from './contexts/Protected';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/home';
// import Exhibition from './pages/Exhibition/exhi';
// import Compi from './pages/Compi/compi';
import CompiInternal from './pages/Compi/Compi_Internal/index';
import Reg from './pages/Compi/Compi_Internal/Reg';
import Create_Team from './pages/Compi/Compi_Internal/Teams/create_team';
import Workshop from './pages/workshop/home';
import Summit from './pages/Summit/home.js';
import Contact from './pages/AboutUs/ContactUs/contact.jsx'
import Explore from './pages/workshop/components/Explore';
import Recognition from './pages/AboutUs/recognition/Recognition';
import Legals from './pages/AboutUs/legals/Legals';
import SingleParti from './pages/Compi/Compi_Internal/Teams/single_parti';
import AddParti from './pages/Compi/Compi_Internal/Teams/add_parti';
import Footer from './components/Footer/Footer';
import Loading from './pages/loading_page/Loading';
import Loading1 from './pages/loading_page/Loading1'

// const Home= React.lazy(() => import('./pages/Home/home'));
const Lectures = React.lazy(() => import('./pages/Lectures/index'));
const Compi = React.lazy(() => import('./pages/Compi/compi'));
const Exhibition = React.lazy(() => import('./pages/Exhibition/exhi'));
const Media = React.lazy(() => import('./pages/AboutUs/Media/index'));
const HISTORY = React.lazy(() => import('./pages/AboutUs/history/index'));
const Gallery = React.lazy(()=> import('./pages/AboutUs/gallery/gallery'));
const Lecture_gal =React.lazy(()=> import('./pages/AboutUs/gallery/specific/lecture'));
const Exhibition_gal =React.lazy(()=> import('./pages/AboutUs/gallery/specific/exhibiton'));
const Ozone_gal =React.lazy(()=> import('./pages/AboutUs/gallery/specific/ozone'));
const Compi_gal =React.lazy(()=> import('./pages/AboutUs/gallery/specific/compi'));
const Techno_gal =React.lazy(()=> import('./pages/AboutUs/gallery/specific/techno'));
const Robowar_gal =React.lazy(()=> import('./pages/AboutUs/gallery/specific/Robowar'));


function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      },1);
    }, []);
  

    return (
        <div className="App">
        <Router>
                <AuthContextProvider>
                    {/* <Navbar />*/}
                   
                       <Header />
                    
                    <Routes>
                        <Route path='/' element={
                        isLoading ? (
                            <Loading1 />
                         ) : (
                            <Home />
                         )
                         
                        } />
                        {/* <Route path='/' element={
                            <React.Suspense fallback={<div><Loading/></div>}>
                        <Home/>
                        </React.Suspense> }/> */}
                        <Route path='/loading1' element={<Loading1/>} />
                        {/* <Route path='/exhibitions' element={<Exhibition/>}/>
                        <Route path='/competitions' element={<Compi />} /> */}
                        <Route path='/workshops' element={<Workshop/>}/>
                        <Route path='/legals' element={<Legals/>}/>
                        {/* <Route path='/lectures' element={<Lectures />} /> */}
                        <Route path='/workshops/:cardName' element={<Explore/>} />
                        {/* <Route path='/lectures' element={
                        {/* <Route path='/lectures' element={<Lectures />} /> */}
                        <Route path='/explore' element={<Explore/>} />
                        <Route path='/recognition' element={<Recognition/>} />

                        <Route path='/lectures' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Lectures/>
                        </React.Suspense> }/>
                        
                        <Route path='/exhibitions' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Exhibition/>
                        </React.Suspense> }/>

                        <Route path='/competitions' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Compi/>
                        </React.Suspense> }/>

                        <Route path='/aboutus/media' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Media/>
                        </React.Suspense> }/>

                        <Route path='/history' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <HISTORY/>
                        </React.Suspense> }/>

                        <Route path='/summits' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Summit/>
                        </React.Suspense> }/>

                        <Route path='/contactus' element={<Contact/> } />

                        <Route path='/legals' element={<Legals /> } />
                        

                        <Route path='competitions/:compiName' element={<CompiInternal />} />
                        <Route path='competitions/:compiName/register' element={<Protected><Reg /></Protected>} />
                        <Route path='competitions/:compiName/createTeam' element={<Protected><Create_Team  /></Protected>} />
                        <Route path='competitions/:compiName/singleparticipant' element={<Protected><SingleParti /></Protected>} />
                        <Route path='competitions/:compiName/addparticipant' element={<Protected><AddParti /></Protected>} />


                        <Route path='/gallery' element={
                            <React.Suspense fallback={<div>Loading..    .</div>}>
                        <Gallery/>
                            </React.Suspense>} />
                        <Route path='/gallery/lectures' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Lecture_gal/>
                            </React.Suspense>} /> 
                        <Route path='/gallery/exhibition' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Exhibition_gal/>
                            </React.Suspense>} /> 
                        <Route path='/gallery/ozone' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Ozone_gal/>
                            </React.Suspense>} /> 
                        <Route path='/gallery/compi' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Compi_gal/>
                            </React.Suspense>} /> 
                        <Route path='/gallery/robowars' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Robowar_gal/>
                            </React.Suspense>} />
                        <Route path='/gallery/technoholix' element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                        <Techno_gal/>
                            </React.Suspense>} /> 

                        
                    </Routes>
                    
                        <Footer />
                    
                    
                </AuthContextProvider>
            </Router>
            
        </div>
    );
}

export default App;
