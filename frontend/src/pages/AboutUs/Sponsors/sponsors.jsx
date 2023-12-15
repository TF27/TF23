import React from 'react';
import bg from './assets/sponsersbg.png';
import bob from './assets/bob.png';
import mars from './assets/MarshMcLennan.jpeg';
import styles from './sponsors.module.css'; // Import the CSS file
import sbi from './assets/SBI .jpeg';
import here from './assets/here.jpg';
import unstop from './assets/Unstop.jpeg';
import idfc from './assets/idfc.jpg';
import abl from './assets/Competition Partners/abl.jpeg';
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
import tih from './assets/Competition Partners/TIH LOGO.png';
import witblox from './assets/Competition Partners/witblox.png';
import fetch from './assets/Competition Partners/Fetch.png';
import prag from './assets/Competition Partners/Pragyakalp.png';
import godrej from './assets/GODREJ.png';
import nudge from './assets/nudge.jpeg';
import nsdl from './assets/NSDL.png';
import indoil from './assets/Indian Oil.jpeg';
import eatsure from './assets/EatSure.jpeg';
import cocacola from './assets/coca cola.jpg';
import maxprotein from './assets/maxprotein.jpg';
import monster from './assets/Monster Logo.png';
import teachindia from './assets/tfi.png';
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
import sankalp from './assets/Campus Ambassador Partnrs/Sankalptaru.jpeg';
import coding from './assets/Campus Ambassador Partnrs/Coding Ninjas.jpeg';
import college from './assets/Campus Ambassador Partnrs/Collegedunia.png';
import elearn from './assets/Campus Ambassador Partnrs/ELM.jpeg';
import etasha from './assets/Campus Ambassador Partnrs/ETASHA.jpeg';
import guvi from './assets/Campus Ambassador Partnrs/Guvi.jpeg';
import languify from './assets/Campus Ambassador Partnrs/Languify.jpeg';
import mohan from './assets/Campus Ambassador Partnrs/mohan.jpeg';
import prep from './assets/Campus Ambassador Partnrs/Prepp in.png';
import udemy from './assets/Campus Ambassador Partnrs/Udemy.png';
import uiux from './assets/Campus Ambassador Partnrs/UI UX Global.jpg';
import cnbc from './assets/media/cnbc.jpeg';
import cinepolis from './assets/cine.jpeg';
import jio from './assets/media/Jiosaavan.png';
import maha from './assets/media/maha.jpeg';
import ontv from './assets/media/ONTV LOGO.png';
import punekar from './assets/media/Punekar news.jpeg';
import notice from './assets/media/notice.png';
import inshorts from './assets/media/Inshorts.png';
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
import gaana from './assets/Gaana_Logo.png';
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
        <a href='https://www.marshmclennan.com/'>
        <img src={mars}></img>
        </a>
      </div>
      <div className={styles.title}><h1>Marsh McLennan Global Services India Pvt Ltd</h1></div>
      <div className={styles.title}><h1>Associate Title Sponsor</h1></div>
      <div className={styles.bobby}>
        <a href='https://www.sbi.co.in/web/home/home'>
        <img src={sbi}></img>
        </a>
      </div>
      <div className={styles.title}><h1>Powered By</h1></div>
      <div className={styles.bobby}>
        <a href='http://here.com/'>
        <img src={here}></img>
        </a>
        <a href='http://idfcfirstbank.com/'>
        <img src={idfc}></img>
        </a>
        <a href='http://unstop.com/'>
        <img src={unstop}></img>
        </a>
      </div>
      <div className={styles.title}><h1>Competitions Sponsor</h1></div>
      <div className={styles.bobby}>
        <a href='http://findoc.com/'>
        <img src={findoc}></img>
        </a>
        <a href='http://boeing.com/'>
        <img src={boeing}></img>
        </a>
        <a href='http://atlassian.com/'>
        <img src={atlassian}></img>
        </a>
      </div>
      <div className={styles.bobby}>
        <a href='http://datamatics.com/'>
        <img src={datamatics}></img>
        </a>
        <a href='http://tih.iitb.ac.in/'>
        <img src={tih}></img>
        </a>
        <a href='http://fetch.ai/'>
        <img src={fetch}></img>
        </a>
      </div>
      <div className={styles.bobby}>
      <a href='https://www.edelweisstokio.in/'>
        <img src={edel}></img>
        </a>
        <a href='http://airbus.com/'>
        <img src={airbus}></img>
        </a>
        <a href='http://atomberg.com/'>
        <img src={atomberg}></img>
        </a>
      </div>
      <div className={styles.bobby}>
      
        <img src={olympiad}></img>
        
        <a href='http://witblox.com/'>
        <img src={witblox}></img>
        </a>
        <a href='https://techradiance.in/'>
        <img src={techrad}></img>
        </a>
      </div>
      <div className={styles.bobby}>
      <a href='https://ableducation.com/'>
        <img src={abl}></img>
        </a>
        
        <img src={prag}></img>
        
        <a href='https://www.robocapleague.com/'>
        <img src={robocap}></img>
        </a>
      </div>
      <div className={styles.title}><h2>Innovation Partner</h2><h2> Official Tech-Aid Partner</h2></div>
      <div className={styles.bobby}>
        <a href='http://godrej.com/'>
        <img src={godrej}></img>
        </a>
        <a href='https://csi.thenudge.org/'>
        <img src={nudge}></img>
        </a>
      </div>
      <div className={styles.title}><h1>International Summit Partners</h1></div>
      <div className={styles.bobby2}>
        <img src={mars}></img>
        <img src={nsdl}></img>
      </div>
      <div className={styles.title2}><h2>Industry Summit Partner</h2><h2> Fintech Summit Partner</h2></div>
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
      <div className={styles.bobby3}>
        <img src={gaana}></img>
        <img src={jagran}></img>
        <img src={cnbc}></img>
      </div>
      <div className={styles.title}><h2>Marathi Media Partner</h2></div>
      <div className={styles.single}>
        <img src={maha}></img>
      </div>
      <div className={styles.title}><h2>Youth Media Partner</h2><h2>PR Partner</h2></div>
      <div className={styles.bobby3}>
        <img src={youth}></img>
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
