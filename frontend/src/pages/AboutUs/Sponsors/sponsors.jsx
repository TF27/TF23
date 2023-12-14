import React from 'react';
import bg from './assets/sponsersbg.png';
import bob from './assets/bob.png';
import mars from './assets/mars.png';
import styles from './sponsors.module.css'; // Import the CSS file
import sbi from './assets/SBI .jpeg';
import here from './assets/here.jpg';
import unstop from './assets/Unstop.jpeg';
import idfc from './assets/idfc.jpg';
import abl from './assets/Competition Partners/abl.png';
import atlassian from './assets/Competition Partners/Atlassian.png';
import atomberg from './assets/Competition Partners/Atomberg_logo.jpg';
import airbus from './assets/Competition Partners/Airbus.png';
import boeing from './assets/Competition Partners/boeing.jpeg';
import datamatics from './assets/Competition Partners/Datamatics.jpg';
import edel from './assets/Competition Partners/edel.png';
import findoc from './assets/Competition Partners/findoc.png';
import olympiad from './assets/Competition Partners/olympiad.jpeg';
import robocap from './assets/Competition Partners/robocap.png';
import techrad from './assets/Competition Partners/Techradiance..png';
import tih from './assets/Competition Partners/TIH logo.png';
import witblox from './assets/Competition Partners/witblox.png';
import fetch from './assets/Competition Partners/Fetch.png';
import prag from './assets/Competition Partners/Pragyakalp.png';
import godrej from './assets/godrej.jpg';
import nudge from './assets/nudge.jpeg';
import nsdl from './assets/NSDL.png';
import indoil from './assets/Indian Oil.jpeg';
import eatsure from './assets/EatSure.jpeg';
import cocacola from './assets/coca cola.jpg';
import maxprotein from './assets/maxprotein.jpg';
import monster from './assets/Monster Logo.png';
import teachindia from './assets/tfi .png';
import boostgrad from './assets/Boostgrad.png';
import sevanyay from './assets/snu.jpg';
import playmaker from './assets/General Sponsors/Playmaker Labs.jpg';
import duolingo from './assets/General Sponsors/duolingowhite.jpeg';
import sydney from './assets/International University Partners/sydney.PNG';
import taiwan from './assets/International University Partners/Taiwan Logo .png';
import nus from './assets/International University Partners/nus.png';
import ottago from './assets/International University Partners/ottago.jpg';
import icewrap from './assets/Icewrap.jpeg';
import mailercloud from './assets/Mailercloud.jpeg';
import neomedia from './assets/neomedia.png';
import gmprod from './assets/GM-Productions.png';
import sankalp from './assets/Campus Ambassador Partnrs/Sankalptaru.png';
import coding from './assets/Campus Ambassador Partnrs/Coding Ninjas.png';
import college from './assets/Campus Ambassador Partnrs/Collegedunia.png';
import elearn from './assets/Campus Ambassador Partnrs/ELM.png';
import etasha from './assets/Campus Ambassador Partnrs/ETASHA.jpeg';
import guvi from './assets/Campus Ambassador Partnrs/Guvi.png';
import languify from './assets/Campus Ambassador Partnrs/Languify.jpeg';
import mohan from './assets/Campus Ambassador Partnrs/mohan.png';
import prep from './assets/Campus Ambassador Partnrs/Prepp in.png';
import udemy from './assets/Campus Ambassador Partnrs/Udemy.png';
import uiux from './assets/Campus Ambassador Partnrs/UI UX Global.jpg';
import cnbc from './assets/media/cnbc.jpeg';
import cinepolis from './assets/media/cnbc.jpeg';
import jio from './assets/media/Jio Saavn Logo.png';
import maha from './assets/media/maha.jpeg';
import ontv from './assets/media/ONTV LOGO.png';
import punekar from './assets/media/Punekarnews.png';
import notice from './assets/media/notice.png';
import inshorts from './assets/media/logo inshorts black.png';
import zex from './assets/media/zex.png';
import jagran from './assets/media/jagranjosh logo.jpg';
import zouton from './assets/zouton.jpg';
import abhibus from './assets/AbhiBus.png';
import grabon from './assets/grabon.png';
import camlin from './assets/camlin.jpg';
import fetchie from './assets/camlin.jpg';
import toi from './assets/media/toi.jpg';
import ufo from './assets/UFO logo outdoor.png';
import youth from './assets/media/youth.png';
import britishcouncil from './assets/BritishCouncil.jpeg';
import gaana from './assets/media/toi.jpg';
import timetechies from './assets/media/timetechies.png';







const bgHaiJi = {
  backgroundImage: `url(${bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  width: '100vw',
  position: 'absolute',
  top: '0',
  zIndex: '-1',
  backgroundAttachment: 'fixed',
  // Add a pseudo-element to create an overlay
'::before': {
  content: '""',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 1)', // Adjust the color and transparency here
},
};

const Sponsors = () => {
  return (
    <div className='yoyohoneysingh' style={bgHaiJi}>
      <div className={styles.head}><h1>Title Sponsor</h1></div>
      <div className={styles.singlehead}>
        <img src={mars}></img>
      </div>
      <div className={styles.title}><h1>Marsh McLennan Global Services India Pvt Ltd</h1></div>
      <div className={styles.title}><h1>Associate Title Sponsor</h1></div>
      <div className={styles.bobby}>
        <img src={sbi}></img>
      </div>
      <div className={styles.title}><h1>Powered By</h1></div>
      <div className={styles.bobby}>
        <img src={here}></img>
        <img src={idfc}></img>
        <img src={unstop}></img>
      </div>
      <div className={styles.title}><h1>Competitions Sponsor</h1></div>
      <div className={styles.bobby}>
        <img src={findoc}></img>
        <img src={boeing}></img>
        <img src={atlassian}></img>
      </div>
      <div className={styles.bobby}>
        <img src={datamatics}></img>
        <img src={tih}></img>
        <img src={fetch}></img>
      </div>
      <div className={styles.bobby}>
        <img src={edel}></img>
        <img src={airbus}></img>
        <img src={atomberg}></img>
      </div>
      <div className={styles.bobby}>
        <img src={olympiad}></img>
        <img src={witblox}></img>
        <img src={techrad}></img>
      </div>
      <div className={styles.bobby}>
        <img src={abl}></img>
        <img src={prag}></img>
        <img src={robocap}></img>
      </div>
      <div className={styles.title}><h2>Innovation Partner</h2><h2> Official Tech-Aid Partner</h2></div>
      <div className={styles.bobby}>
        <img src={godrej}></img>
        <img src={nudge}></img>
      </div>
      <div className={styles.title}><h1>International Summit Partners</h1></div>
      <div className={styles.bobby2}>
        <img src={mars}></img>
        <img src={nsdl}></img>
      </div>
      <div className={styles.title}><h2>Industry Summit Partner</h2><h2> Fintech Summit Partner</h2></div>
      <div className={styles.title}><h1>Official Ozone Title</h1></div>
      <div className={styles.single}>
        <img src={indoil}></img>
      </div>
      <div className={styles.title}><h2>Official Food-Court Partner</h2><h2> Official Beverage Partner </h2></div>
      <div className={styles.bobby}>
        <img src={eatsure}></img>
        <img src={cocacola}></img>
      </div>
      <div className={styles.title}><h2>Official Energy-Bar Partner</h2><h2> Official Energy Drinks Partner</h2></div>
      <div className={styles.bobby}>
        <img src={maxprotein}></img>
        <img src={monster}></img>
      </div>
      <div className={styles.title}><h2>Official social impact partner</h2><h2>Career Empowerment Partner</h2></div>
      <div className={styles.bobby}>
        <img src={teachindia}></img>
        <img src={boostgrad}></img>
      </div>
      <div className={styles.title}><h1>General Sponsors</h1></div>
      <div className={styles.bobby}>
        <img src={sevanyay}></img>
        <img src={playmaker}></img>
        <img src={duolingo}></img>
      </div>
      <div className={styles.title}><h1>International University Partners</h1></div>
      <div className={styles.bobby}>
        <img src={sydney}></img>
        <img src={taiwan}></img>
      </div>
      <div className={styles.bobby}>
        <img src={ottago}></img>
        <img src={nus}></img>
      </div>
      <div className={styles.title}><h1>Knowledge Partner</h1></div>
      <div className={styles.single}>
        <img src={britishcouncil}></img>
      </div>
      <div className={styles.title}><h1>Media Partners</h1></div>
      <div className={styles.single}>
        <img src={toi}></img>
      </div>
      <div className={styles.single1}>
        <img src={timetechies}></img>
      </div>
      <div className={styles.bobby3}>
        <img src={punekar}></img>
        <img src={inshorts}></img>
        <img src={notice}></img>
      </div>
      <div className={styles.title}><h2>Marathi Media Partner</h2><h2></h2></div>
      <div className={styles.bobby3}>
        <img src={maha}></img>
        <img src={gaana}></img>
        <img src={cnbc}></img>
      </div>
      <div className={styles.title}><h2>Youth Media Partner</h2><h2>PR Partner</h2></div>
      <div className={styles.bobby3}>
        <img src={youth}></img>
        <img src={jagran}></img>
        <img src={zex}></img>
      </div>
      <div className={styles.title}><h2>Cine-Media partner</h2><h2>Music Streaming Partner</h2><h2>Official Multiplex Partner</h2></div>
      <div className={styles.bobby3}>
        <img src={ufo}></img>
        <img src={jio}></img>
        <img src={cinepolis}></img>
      </div>
      <div className={styles.title}><h2>Transit Media Partner</h2></div>
      <div className={styles.single}>
        <img src={ontv}></img>
      </div>
      <div className={styles.title}><h2>Email and Collaboration Partner</h2><h2>Outreach Partner</h2></div>
      <div className={styles.bobby}>
        <img src={icewrap}></img>
        <img src={mailercloud}></img>
      </div>
      <div className={styles.title}><h2>Official Photography Partner</h2><h2>Official Aftermovie Partner</h2></div>
      <div className={styles.bobby}>
        <img src={gmprod}></img>
        <img src={neomedia}></img>
      </div>
      <div className={styles.title}><h1>Campus Ambassador Partners</h1></div>
      <div className={styles.title}><h2>Title Sponsor</h2></div>
      <div className={styles.single}>
        <img src={uiux}></img>
      </div>
      <div className={styles.bobby}>
        <img src={sankalp}></img>
        <img src={elearn}></img>
        <img src={languify}></img>
      </div>
      <div className={styles.bobby}>
        <img src={udemy}></img>
        <img src={mohan}></img>
        <img src={fetchie}></img>
      </div>
      <div className={styles.bobby}>
        <img src={etasha}></img>
        <img src={coding}></img>
        <img src={college}></img>
      </div>
      <div className={styles.bobby}>
        <img src={guvi}></img>
        <img src={prep}></img>
      </div>
      <div className={styles.title}><h1>Coupons Partner</h1></div>
      <div className={styles.bobby}>
        <img src={grabon}></img>
        <img src={zouton}></img>
      </div>
      <div className={styles.title}><h2>Travelling Partner </h2><h2>Statitonary Partner </h2></div>
      <div className={styles.bobby}>
        <img src={abhibus}></img>
        <img src={camlin}></img>
      </div>
      </div>
    
  );
};

export default Sponsors;
