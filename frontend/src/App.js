import "./App.css";
import React, { useState, useEffect } from "react";
// import Header from "./components/Navbar/Header";
import { AuthContextProvider } from "./contexts/AuthContext";
import ReactGA from "react-ga";
import Protected from "./contexts/Protected";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import CompiInternal from "./pages/Compi/Compi_Internal/index";
import Reg from "./pages/Compi/Compi_Internal/Reg";
import Create_Team from "./pages/Compi/Compi_Internal/Teams/create_team";
// import Workshop from './pages/workshop/home';
import Summit from "./pages/Summit/home.jsx";
import Contact from "./pages/AboutUs/ContactUs/contact.jsx";
// import Explore from './pages/workshop/components/Explore';
import Recognition from "./pages/AboutUs/recognition/Recognition";
import Legals from "./pages/AboutUs/legals/Legals";
import SingleParti from "./pages/Compi/Compi_Internal/Teams/single_parti";
import AddParti from "./pages/Compi/Compi_Internal/Teams/add_parti";
import Footer from "./components/Footer/Footer";
import Loading1 from "./pages/loading_page/Loading1";
import WorkReg from "./pages/workshop/internal/reg";
import Header_update from "./components/Navbar/Header_update";
import Sustain from "./pages/sustain/App.jsx";
import SIrobowars from "./pages/SI/robowars/App.jsx";
import SustainRegtest from "./pages/SI/components/Reg2.jsx";
import Sustainregwebinar from "./pages/SI/components/Reg1.jsx";
import SummitReg from "./pages/Summit/reg.jsx";

//robowars betting page
import Robowarsbet from "./pages/Robowars_bet/Home.jsx";

// const Home= React.lazy(() => import('./pages/Home/home'));
const Lectures = React.lazy(() => import("./pages/Lectures/index"));
const Compi = React.lazy(() => import("./pages/Compi/compi"));
const Robowars = React.lazy(() => import("./pages/Robowars/robowars"));
const Accommodation = React.lazy(() => import("./pages/Accommodation/index"));
const Fintech = React.lazy(() => import("./pages/Summit/fintech"));
const Industry = React.lazy(() => import("./pages/Summit/industry"));
const Technoholix = React.lazy(() => import("./pages/Technoholix/technoholix"));
const Sponsors = React.lazy(() => import("./pages/AboutUs/Sponsors/sponsors"));
const Exhibition = React.lazy(() => import("./pages/Exhibition/exhi"));
const Media = React.lazy(() => import("./pages/AboutUs/Media/index"));
const HISTORY = React.lazy(() => import("./pages/AboutUs/history/index"));
const Gallery = React.lazy(() => import("./pages/AboutUs/gallery/index"));
const Lecture_gal = React.lazy(() =>
  import("./pages/AboutUs/gallery/specific/lecture")
);
const Exhibition_gal = React.lazy(() =>
  import("./pages/AboutUs/gallery/specific/exhibiton")
);
const Ozone_gal = React.lazy(() =>
  import("./pages/AboutUs/gallery/specific/ozone")
);
const Compi_gal = React.lazy(() =>
  import("./pages/AboutUs/gallery/specific/compi")
);
const Techno_gal = React.lazy(() =>
  import("./pages/AboutUs/gallery/specific/techno")
);
const Robowar_gal = React.lazy(() =>
  import("./pages/AboutUs/gallery/specific/Robowar")
);
const Workshop = React.lazy(() => import("./pages/workshop/home"));
const WorkshopExplore = React.lazy(() =>
  import("./pages/workshop/internal/index")
);

const IC = React.lazy(() => import("./pages/Events/Innovation Challenge/ic"));
const Techconnect = React.lazy(() => import("./pages/Events/techconnect/techconnect"));
const RoboReg = React.lazy(() => import("./pages/Robowars/components/Reg"));

const Cyclothon = React.lazy(() =>
  import("./pages/Events/cyclothon/Cyclothon")
);

const IFT = React.lazy(() => import("./pages/Events/ift/ift"));
const IFTReg = React.lazy(() => import("./pages/Events/ift/reg"));

const Merch = React.lazy(() => import("./pages/AboutUs/Merch/merch.jsx"));

const QrCodeForm = React.lazy(() => import("./pages/Events/techx/techx.jsx"));

const Tracking_ID = "UA-81222017-2";
ReactGA.initialize(Tracking_ID);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
          <Header_update />

          <Routes>
            <Route path="/" element={isLoading ? <Loading1 /> : <Home />} />
            <Route path="/legals" element={<Legals />} />
            <Route
              path="/cyclothon"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Cyclothon />
                </React.Suspense>
              }
            />

            <Route
              path="/workshops/"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Workshop />
                </React.Suspense>
              }
            />
            <Route
              path="/robowars-bet/"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Robowarsbet />
                </React.Suspense>
              }
            />
            <Route
              path="/workshops/:cardName"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <WorkshopExplore />
                </React.Suspense>
              }
            />
            <Route path="/recognition" element={<Recognition />} />

            <Route
              path="/lectures"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Lectures />
                </React.Suspense>
              }
            />
            <Route
              path="/exhibitions"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Exhibition />
                </React.Suspense>
              }
            />
            <Route
              path="/competitions"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Compi />
                </React.Suspense>
              }
            />
            <Route
              path="/robowars"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Robowars />
                </React.Suspense>
              }
            />
            <Route
              path="/sponsors"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Sponsors />
                </React.Suspense>
              }
            />
            <Route
              path="/sustain"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Sustain />
                </React.Suspense>
              }
            />
            <Route
              path="/financialliteracy"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <SIrobowars />
                </React.Suspense>
              }
            />
            <Route
              path="/sustainregtest"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <SustainRegtest />
                </React.Suspense>
              }
            />
            <Route
              path="/sustainregwebinar"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Sustainregwebinar />
                </React.Suspense>
              }
            />
            <Route
              path="/accommodation"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Accommodation />
                </React.Suspense>
              }
            />
            <Route
              path="/acco"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Accommodation />
                </React.Suspense>
              }
            />

            <Route
              path="/techconnect"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Techconnect />
                </React.Suspense>
              }
            />

            <Route
              path="/techx"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Technoholix />
                </React.Suspense>
              }
            />
            {/* <Route
              path="/robowars/:catName/register"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <RoboReg />
                </React.Suspense>
              }
            /> */}
            <Route
              path="/aboutus/media"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Media />
                </React.Suspense>
              }
            />
            <Route
              path="/history"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <HISTORY />
                </React.Suspense>
              }
            />

            <Route
              path="/summits"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Summit />
                </React.Suspense>
              }
            />



            <Route
              path="/summits/fintech"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Fintech />
                </React.Suspense>
              }
            />
            <Route
              path="/fintech"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Fintech />
                </React.Suspense>
              }
            />

            <Route
              path="/summits/industry"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Industry />
                </React.Suspense>
              }
            />
            <Route
              path="/industry"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Industry />
                </React.Suspense>
              }
            />

            <Route
              path="summits/:cardName/register"
              element={
                <Protected>
                  <SummitReg />
                </Protected>
              }
            />

            <Route path="/contactus" element={<Contact />} />

            <Route path="/legals" element={<Legals />} />

            <Route path="/:compiName" element={<CompiInternal />} />
            <Route
              path="workshops/:cardName/register"
              element={
                // <Protected>
                  <WorkReg />
                // </Protected>
              }
            />
            <Route path="competitions/:compiName" element={<CompiInternal />} />
            <Route
              path="competitions/:compiName/register"
              element={
                <Protected>
                  <Reg />
                </Protected>
              }
            />
            <Route
              path="competitions/:compiName/createTeam"
              element={
                <Protected>
                  <Create_Team />
                </Protected>
              }
            />
            <Route
              path="competitions/:compiName/singleparticipant"
              element={
                <Protected>
                  <SingleParti />
                </Protected>
              }
            />
            <Route
              path="competitions/:compiName/addparticipant"
              element={
                <Protected>
                  <AddParti />
                </Protected>
              }
            />

            <Route
              path="/gallery"
              element={
                <React.Suspense fallback={<div>Loading.. .</div>}>
                  <Gallery />
                </React.Suspense>
              }
            />
            <Route
              path="/gallery/lectures"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Lecture_gal />
                </React.Suspense>
              }
            />
            <Route
              path="/gallery/exhibition"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Exhibition_gal />
                </React.Suspense>
              }
            />
            <Route
              path="/gallery/ozone"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Ozone_gal />
                </React.Suspense>
              }
            />
            <Route
              path="/gallery/compi"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Compi_gal />
                </React.Suspense>
              }
            />
            <Route
              path="/gallery/robowars"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Robowar_gal />
                </React.Suspense>
              }
            />

            <Route
              path="/gallery/technoholix"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <Techno_gal />
                </React.Suspense>
              }
            />

            <Route
              path="/innovationchallenge"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <IC />
                </React.Suspense>
              }
            />
            <Route
              path="/ic"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <IC />
                </React.Suspense>
              }
            />
            <Route
              path="/ift"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                  <IFT />
                </React.Suspense>
              }
            />
            <Route
              path="/ift/:cardName/register"
              element={
                <React.Suspense fallback={<div>Loading...</div>}>
                <Protected>
                  <IFTReg />
                </Protected>
                </React.Suspense>
              }
            />

          <Route 
            path='/store'
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <Merch />
              </React.Suspense>
            }
          />

          <Route
            path="/qr"
            element={
              <React.Suspense fallback={<div>Loading...</div>}>
                <QrCodeForm />
              </React.Suspense>
            }
          />

          </Routes>

       <Footer />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;