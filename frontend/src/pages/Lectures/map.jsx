import React, { useState } from 'react';
import europe from './assets/mapContent/Europe/EUROPE.jpg'; //import whatever images we need and add them in the cityData beside a image tag
import worldmap from './assets/map.png';
import EastUSA from './assets/mapContent/East USA/EASTUSA.jpg';
import WestUSA from './assets/mapContent/West USA/WESTUSA.jpg';
import SouthEastAsia from './assets/mapContent/SouthEast Asia/Southeast-Asia.jpg';
import Australia from './assets/mapContent/Australia/AUSTRALIA.jpg';
import NorthEastAsia from './assets/mapContent/NorthEast Asia/Northeast-Asia.jpg';


// import im1 from './assets/mapContent/img1.png'


// importing map content
// Europe
import andrew from '../Lectures/assets/mapContent/Europe/andrew.jpg';
import bjarne from '../Lectures/assets/mapContent/Europe/bjarne.jpg';
import bruce from '../Lectures/assets/mapContent/Europe/bruce.jpg';
import jurgen from '../Lectures/assets/mapContent/Europe/jurgen.jpg';
import kurt from '../Lectures/assets/mapContent/Europe/kurt.jpg';
import lars from '../Lectures/assets/mapContent/Europe/Lars.jpg';
import lyn from '../Lectures/assets/mapContent/Europe/lyn.jpg'; 
import serge from '../Lectures/assets/mapContent/Europe/serge.jpg';
import tarja from '../Lectures/assets/mapContent/Europe/Tarja-Photo.jpg';
import richardj from '../Lectures/assets/mapContent/Europe/Richard J Roberts.jpg';

// import robert from '../Lectures/assets/mapContent/Europe/robert.jpg';

// East USA
import arvind from '../Lectures/assets/mapContent/East USA/arvind.jpg';
import bob from '../Lectures/assets/mapContent/East USA/bob.jpg';
import charles from '../Lectures/assets/mapContent/East USA/charles.jpg';
 import eric from '../Lectures/assets/mapContent/East USA/eric.jpg';
import henry from '../Lectures/assets/mapContent/East USA/henry.jpg';
import john from '../Lectures/assets/mapContent/East USA/john.jpg';
import kathryn from '../Lectures/assets/mapContent/East USA/Kathryn.jpg';
import kevin from '../Lectures/assets/mapContent/East USA/kevin.jpg';
import ramesh from '../Lectures/assets/mapContent/East USA/RameshRaksar.jpg';
import vint from '../Lectures/assets/mapContent/East USA/vint.jpg';

// Australia
import malcolm from '../Lectures/assets/mapContent/Australia/malcolm.jpg';
import simon from '../Lectures/assets/mapContent/Australia/simon.jpg';
import marlene from '../Lectures/assets/mapContent/Australia/marlene.jpg';


// West USA
import allen from '../Lectures/assets/mapContent/West USA/allen.jpg';
import anima from '../Lectures/assets/mapContent/West USA/anima.jpg';
import erick from '../Lectures/assets/mapContent/West USA/erick.jpg';
import gurtej from '../Lectures/assets/mapContent/West USA/gurtej.jpg';
import mark from '../Lectures/assets/mapContent/West USA/mark.jpg';
import randy from '../Lectures/assets/mapContent/West USA/randy.jpg';
import robert from '../Lectures/assets/mapContent/West USA/robert.jpg';
import ryan from '../Lectures/assets/mapContent/West USA/Ryan.jpg';



//Northwest Asia Asia
import kilnan from '../Lectures/assets/mapContent/NorthEast Asia/kilnan.jpg';
import minliang from '../Lectures/assets/mapContent/NorthEast Asia/minliang.jpg';
import patrick from '../Lectures/assets/mapContent/NorthEast Asia/patrick.jpg';
import tasuku from '../Lectures/assets/mapContent/NorthEast Asia/tasuku.jpg';

//SouthWest Asia
import apj from '../Lectures/assets/mapContent/SouthEast Asia/APJ.jpg';
import abhinav from '../Lectures/assets/mapContent/SouthEast Asia/Abhinav Bindra.jpg';
import ada from '../Lectures/assets/mapContent/SouthEast Asia/Ada Yonath.jpg';
import dalai from '../Lectures/assets/mapContent/SouthEast Asia/Dalai Lama.jpg';
import dasho from '../Lectures/assets/mapContent/SouthEast Asia/Dasho.jpg';
import anubhav from '../Lectures/assets/mapContent/SouthEast Asia/Anubhav.jpeg';
import atul from '../Lectures/assets/mapContent/SouthEast Asia/Atul.jpg';
import radhakrishnan from '../Lectures/assets/mapContent/SouthEast Asia/K radhakrishnan.jpg';
import manohar from '../Lectures/assets/mapContent/SouthEast Asia/Manohar.jpg';
import narayanm from '../Lectures/assets/mapContent/SouthEast Asia/Narayan Murthy.jpg';
import Rana from '../Lectures/assets/mapContent/SouthEast Asia/Rana.jpg';
import Suresh from '../Lectures/assets/mapContent/SouthEast Asia/SureshPrabhu.jpg';
import narayan from '../Lectures/assets/mapContent/SouthEast Asia/V Narayan.jpeg';
import zaheer from '../Lectures/assets/mapContent/SouthEast Asia/Zaheer Khan.png';
import alakh from '../Lectures/assets/mapContent/SouthEast Asia/Alakh.jpg';





/*import ryan from '../Lectures/assets/mapContent/West USA/Ryan.jpg';
import ryan from '../Lectures/assets/mapContent/West USA/Ryan.jpg';
import ryan from '../Lectures/assets/mapContent/West USA/Ryan.jpg';
import ryan from '../Lectures/assets/mapContent/West USA/Ryan.jpg';
import ryan from '../Lectures/assets/mapContent/West USA/Ryan.jpg';*/




const WorldMap = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const cityData = [
    { name: 'Europe', x: '48%', y: '39%', info: 'Info About Europe',image: europe, in1name: 'Andrew Ng',in2name: 'Bjarne Stroustrup',in3name: 'Dr. Bruce Allen',in4name: 'Jürgen Schmidhuber',in5name: 'Kurt Wüthrich',in6name: 'Lars Rasmussen',in7name:'Lyn Evans',in8name:'Sir Richard J. Roberts', in9name:'Serge Haroche',in10name:'Tarja Halonen', in1cont: 'UK',in2cont: 'Denmark',in3cont: 'Germany',in4cont: 'Germany',in5cont: 'Switzerland',in6cont: 'Denmark',in7cont:'UK',in8cont:'UK', in9cont:'France',in10name:'Finland', info1: 'A pioneer in online education. Co-Founder of Coursera and Co-Founder and Head of Google Brain', info2: 'Creator and Developer of the C++ programming language. Managing Director at Morgan Stanley', info3: 'Director of the Max Planck Institute for Gravitional Physics', info4: 'Director for Dalle Molle Institute for AI Research. Father of Modern AI and recognised for his work in Deep Learning and AI', info5: 'Recipient of the Nobel Prize in Chemistry for developing NMR methods', info6: 'Co-Founder of Google Maps and Ex-Director of Engineering for Facebook',info7:'Project Leader of the worlds largest particle collider, the Large Hadron Collider and the Director of the Linear Collider Collaboration',info8:'Nobel Laureate in Physiology or Medicine for the discovery of introns in eukaryotic DNA',info9:'Nobel Laureate in Physics for work on the individual quantum systems and study of the photon',info10:'The 11th and First woman President of Finland ', image1: andrew, image2: bjarne, image3: bruce, image4: jurgen, image5: kurt, image6: lars, image7: lyn, image8: richardj, image9: serge, image10: tarja},
    { name: 'West USA', x: '21%', y: '40%', info: 'Info About West USA', image: WestUSA, in1name: 'Allen Blue',in2name: 'Anima Anandkumar',in3name: 'Eric Klinker',in4name: 'Gurtej Sandhu',in5name: 'Mark Papermaster',in6name: 'Dr. Randy Schekman',in7name:'Robert J. Mical',in8name:'Ryan Germick', in1cont: 'West USA',in2cont: 'West USA',in3cont: 'West USA',in4cont: 'West USA',in5cont: 'West USA',in6cont: 'West USA',in7cont:'West USA',in8cont:'West USA', info1: 'Co-Founder and VP of Product Management at LinkedIn. An experienced product executive and skilled designer', info2: 'Director of ML research at NVIDIA. Bren Professor of Computing at the California Institute of Technology', info3: 'Co-Founder of Resilio Inc. and fomer CEO of BitTorrent', info4: 'Senior Fellow and VP at Micron Technology. The all-time seventh most prolific inventor in the world with 1350+ USA patents', info5: 'Chief Technology Officer and Executive Vice President of Technology and Engineering at AMD', info6: 'Nobel Prize winner for Physiology or Medicine for work on cell membrane vesicle trafficking',info7:'Director of Games at Google. Famously known as the inventor of Attari Lynx',info8:'Principal Designer at Google and Head of Google Doodle humanising their technology', image1: allen, image2: anima, image3: erick, image4: gurtej, image5: mark, image6: randy, image7: robert, image8: ryan},
    { name: 'East USA', x: '28%', y: '47%', info: 'Info About East USA', image: EastUSA, in1name: 'Arvind Krishna',in2name: 'Bob Frankston',in3name: 'Charles Sevevrence',in4name: 'Eric S. Maskin',in5name: 'Henry Throop',in6name: 'Dr. John C. Mather',in7name:'Kathryn Leuders',in8name:'Kevin Nolan',in9name:'Ramesh Raskar',in10name: 'Vint Cerf', in1cont: 'East USA',in2cont: 'East USA',in3cont: 'East USA',in4cont: 'East USA',in5cont: 'East USA',in6cont: 'East USA',in7cont:'East USA',in8cont:'East USA',in9cont:'East USA',in10cont:'East USA', info1: 'Chairman and CEO of IBM', info2: 'Co-Founder of Software Arts and Co-Creater of the VisiCalc spreadsheet program', info3: 'Executive Director of the Sakai Foundation and the First Chief Architect of the Sakai Project', info4: 'Nobel Laureate in Economics for laying the foundations of mechanism design theory', info5: 'Member of the Science team for NASA\'s New Horizons mission to Pluto and the Kuiper Belt', info6: 'American Astrophysicist and Cosmologist. Recipient of the Nobel Prize in Physics for his work on the COBE',info7:'Former Associate Administrator of the Human Exploration and Operations Mission Directorate',info8:'Former English professional footballer. President and CEO of GE Appliances, a Haier Company',info9:'Head of the MIT Media Lab\'s Camera Culture Research Group',info10:'Vice President and Chief Internet Evangelist for Google. Winner of the Turing Award and recognised as the Father of the Internet', image1: arvind, image2: bob, image3: charles, image4: eric, image5: henry, image6: john, image7: kathryn, image8: kevin, image9:ramesh, image10:vint},
    { name: 'NorthEast Asia', x: '76%', y: '37%', info: 'Info About NorthEast Asia', image:NorthEastAsia,in1name:'Kilnam Chon',in2name:'Min-Liang Tan',in3name:'Patrick Dai',in4name:'Dr. Tasuku Honjo',in1cont:'South Korea',in2cont:'Singapore',in3cont:'China',in4cont:'Japan',info1:'A South Korean computer scientist, he developed the first Internet in Asia, called SDN, in 1982.',info2:'A Singaporean entrepreneur, he is the co-founder and CEO of the gaming hardware company Razer Inc.',info3:'He is the CEO and co-founder of Qtum Foundation, one of the best open-sourced public blockchain platforms.',info4:'A Japanese physician-scientist and immunologist, he won the Nobel Prize in Physiology or Medicine in 2018.' },
    { name: 'Australia', x: '77%', y: '78%', info: 'Info About Australia', image: Australia, in1name:'Malcolm Turnbull',in2name:'Marlene Kanga',in3name:'Simon Taufel',in1cont:'Australia',in2cont:'Australia',in3cont:'Australia',info1:'Former lawyer, investment banker, venture capitalist, and journalist, he was the 29th Prime Minister of Australia.',info2:'An Australian engineer, she was the President of the World Federation of Engineering Organisations (WFEO).',info3:'Formerly a member of the ICC Elite umpire panel, he has won five consecutive ICC Umpire of the Year awards.',image1:malcolm,image2:marlene,image3:simon},
    { name: 'SouthEast Asia', x: '64%', y: '55%', info: 'Info About SouthEast Asia', image: SouthEastAsia,in1name: 'Abhinav Bindra',in2name: 'Dr. Ada Yonath',in3name: 'Alakh Pandey',in4name: 'Anubhav Dubey',in5name: 'Late Dr. A. P. J. Abdul Kalam',in6name: 'Atul Rane',in7name:'His Holiness the 14th Dalai Lama',in8name:'Dasho Tshering Tobgay', in9name:'K. Radhakrishnan',in10name:'Late Manohar Parrikar',in11name:'N R Narayan Murthy',int12name:'Rana Daggubati',int13name:'Suresh Prabhu',int14name:'Dr. V. Narayanan',int15name:'Zaheer Khan', in1cont: 'India',in2cont: 'Israel',in3cont: 'India',in4cont: 'India',in5cont: 'India',in6cont: 'India',in7cont:'India',in8cont:'Bhutan', in9cont:'India',in10cont:'India',int11cont:'India',int12cont:'India',int13cont:'India',int14cont:'India',int15cont:'India', info1: 'An Indian businessman and retired sport shooter, he is the first Indian to win an Olympic Gold Medal.', info2: 'Nobel Laureate in Chemistry for her work on the structure of ribosomes, she is an Israeli crystallographer.', info3: 'Founder and CEO of PhysicsWallah, India\'s leading and most affordable Ed-tech platform', info4: 'Co-founder of the multi-crore company Chai Sutta Bar', info5: 'Former President of India, he was an aerospace scientist, popularly known as The Missile Man of India.', info6: 'Director General of BrahMos and CEO & MD of BrahMos Aerospace ',info7:'The spiritual leader of Tibet, he is a recipient of the Nobel Peace Prize and calls himself a simple Buddhist monk.',info8:'Leader of the People\'s Democratic Party, he is an environmentalist and former PM of Bhutan.',info9:'Former Chairman of ISRO, he is a space scientist often known as the Man Behind the Mangalyaan Mission.',info10:'Former Minister of Defence, he was an Indian politician, leader of the Bharatiya Janata Party, and CM of Goa.',info11:'Founder of tech giant Infosys, he is a billionaire businessman, often called the Father of the Indian IT sector.',info12:'One of the most established leading actors in Indian cinema, he is an entrepreneur and VFX coordinator.',info13:'Former Railway Minister of India, renowned for transformative initiatives and modernizing the rail network',info14:'Distinguished Scientist at ISRO who is currently Director of Liquid Propulsion Systems Centre',info15:'Part of the International Cricket World Cup 2011\'s winning Dream Team, he is one of the best fast bowlers.', image1: abhinav, image2: ada, image3: alakh, image4: anubhav, image5: apj, image6: atul, image7: dalai, image8: dasho, image9: radhakrishnan, image10: manohar,image11:narayanm,image12:Rana,image13:Suresh,image14:narayan,image15:zaheer },
    // { name: 'Europe', x: '48%', y: '39%', info: 'Info About East Europe', arvind: 'Arvind'},
    // { name: 'West Europe', x: '47%', y: '37%', info: 'Info About West Europe',in1name: 'Gravity Industries',in2name: 'Nao | Soft Bank Group',in3name: 'Pal V Robotics',in4name: 'Sepios | ETH Zurich',in5name: 'Skelex',in6name: 'UAV works',in7name: 'RAPTOR, ETH Zurich',in8name: 'SpaceHopper, ETH Zurich',in1cont: 'UK',in2cont: 'France',in3cont: 'Netherlands',in4cont: 'Switzerland',in5cont: 'Netherlands',in6cont: 'Spain',in7cont: 'Switzerland',in8cont: 'Switzerland', info1: 'Daedalus, an exoskeleton that enables humans to fly, has an impressive speed of up to 85 miles per hour', info2: 'This humanoid robot welcomes, informs, and entertains visitors at companies and healthcare centers', info3: 'Pal V Robotics, makers of the world\'s first flying car, take inspiration from nature and ensure safety with fun', info4: 'Sepios is an elite nautical vehicle with its omnidirectionality, high maneuverability, and special fins!', info5: 'Skelex, world\'s first upper-body exoskeleton that augments strength while providing complete freedom of motion', info6: 'UAV Works values innovation, development, and research on aerospace engineering in all of its projects', info7: 'A 1.8m wingspan UAV, equipped with advanced sensors, 100 km/h speed, 50 km range, and versatile payload capacity', info8: 'A compact, agile, and autonomous planetary exploration robot with advanced scientific capabilities', image: WE,image1: gravity, image2: nao, image3: pal, image4: sepios, image5: skelex, image6: uav,image7: raptor, image8: spacehopper },
    // { name: 'West USA', x: '15%', y: '37%', info: 'Info About West USA',in1name: 'Virgin Hyperloop',in2name: 'Petoi',in3name: 'CyBorg Botany',in4name: 'Synergy Moon',in5name: 'Ubiquity Robotics',in6name: 'Bina 48',in7name: 'Netradyne',in1cont: 'USA',in2cont: 'USA',in3cont: 'USA',in4cont: 'USA',in5cont: 'USA',in6cont: 'USA',in7cont: 'USA',info1: 'Working towards commercializing high-speed transportation, Virgin Hyperloop easily delivers airline speeds',info2: 'Maker of futuristic programmable robotics, Petoii is sophisticated and aims for affordable robotic pets',info3: 'Their aim is to merge and power electronic functionalities with the existing biological functions of living plants',info4: 'Synergy Moon is dedicated to the development of cutting-edge space technologies and related services',info5: 'Ubiquity Robotics believes that robotics, automation, and AI will be key to solving global challenges',info6: 'BINA48 is a robotic face combined with the chatbot functionalities, enabling conversation facilities',info7: 'AI-powered fleet safety solutions for enhanced driver monitoring and road analytics', image: WU, image1: hyper, image2: petoi, image3: botany, image4: synergy, image5: ubiquiti, image6: bina, image7: netradyne},
    // { name: 'East USA', x: '25%', y: '42%', info: 'Info About East USA', in1name: 'University of Texas',in2name: 'Neurosky',in3name: 'RoboTiCan',in4name: 'GRAMMY Robot',in5name: 'AstroBee | NASA & ISS',in6name: 'Flir Systems',in1cont: 'USA',in2cont: 'USA',in3cont: 'USA',in4cont: 'USA',in5cont: 'USA',in6cont: 'USA',info1: 'Harmony Exoskeleton is designed for easing upper body movements of subjects with severe disabilities',info2: 'Its colorful visuals provide positive reinforcement while developing skills of attention and mental relaxation',info3: 'RoboTican innovates, develops, and manufactures autonomous UAVs, UGVs, and hybrid systems',info4: 'This is an interactive robot for retail shops and indoor events that can talk to clients and navigate indoors!',info5: 'Astrobee reduces the time astronauts spend on routine duties to focus on things that only humans can do',info6: 'FLIR Machine Vision Cameras have captured HD footage of NASA\'s Perseverance rover landing on Mars', image: EU, image1: texas, image2: neurosky, image3: roboti, image4: grammy, image5: astro, image6: flir},
    // { name: 'NorthEast Asia', x: '82%', y: '28%', info: 'Info About NorthEast Asia', image: europe },
    // { name: 'SouthEast Asia', x: '66%', y: '50%', info: 'Info About SouthEast Asia', image: europe },
    // Add more cities and their coordinates here
  ];

  const handleCityHover = (city) => {
    setHoveredCity(city);
  };

  return (
    <div className="world-map-container" style={{ position: 'relative',width:'90%',height:'90%' ,left:'5vw' }}>
    <div><h1 style={{marginTop:'100px',marginBottom:'10px'}} >TOP HIGHLIGHTS </h1></div>
      <img src={worldmap} className="mapimage" alt="World Map" />

      {cityData.map((city, index) => (
        <div
          key={index}
          className="city-circle"
          style={{
            left: city.x,
            top: city.y,
          }}
          onMouseEnter={() => handleCityHover(city)}
          onMouseLeave={() => handleCityHover(null)}
        />
      ))}

      {hoveredCity && (
        <div
          className="dropdown-menu76"
          style={{
            top: hoveredCity.y,
            left: hoveredCity.x,

          }}
          onMouseEnter={() => handleCityHover(hoveredCity)} // Keep the menu open when the cursor is on the dropdown menu
          onMouseLeave={() => handleCityHover(null)}
        >

          <div className="dropdown-content">
            <div className="city-image-container">
              <img src={hoveredCity.image} alt={hoveredCity.name} className="dropdown-image" />
              {/* <p className="city-name-over-image">{hoveredCity.name}</p> */}
            </div>
            { hoveredCity.info1 &&
            <div className='city-info-container'>
              <img src={hoveredCity.image1} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in1name}</p>
                <p className='mapDataCont'>{hoveredCity.in1cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info1}</p>
              </div>
            </div>
}
            { hoveredCity.info2 &&
            <div className='city-info-container'>
              <img src={hoveredCity.image2} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in2name}</p>
                <p className='mapDataCont'>{hoveredCity.in2cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info2}</p>
              </div>
            </div>
}
            { hoveredCity.info3 &&
            <div className='city-info-container'>
              <img src={hoveredCity.image3} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in3name}</p>
                <p className='mapDataCont'>{hoveredCity.in3cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info3}</p>
              </div>
            </div>
}
            {hoveredCity.info4 &&
            <div className='city-info-container'>
              <img src={hoveredCity.image4} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in4name}</p>
                <p className='mapDataCont'>{hoveredCity.in4cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info4}</p>
              </div>
            </div>
}
            { hoveredCity.info5 &&
            <div className='city-info-container'>
              <img src={hoveredCity.image5} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in5name}</p>
                <p className='mapDataCont'>{hoveredCity.in5cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info5}</p>
              </div>
            </div>
}
            { hoveredCity.info6 &&
            <div className='city-info-container'>
              <img src={hoveredCity.image6} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in6name}</p>
                <p className='mapDataCont'>{hoveredCity.in6cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info6}</p>
              </div>
            </div>
            }
            { hoveredCity.info7 && <div className='city-info-container'>
              <img src={hoveredCity.image7} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in7name}</p>
                <p className='mapDataCont'>{hoveredCity.in7cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info7}</p>
              </div>
            </div>
            }
            { hoveredCity.info8 && 
            <div className='city-info-container'>
              <img src={hoveredCity.image8} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in8name}</p>
                <p className='mapDataCont'>{hoveredCity.in8cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info8}</p>
              </div>
            </div>
          }
          { hoveredCity.info9 && 
            <div className='city-info-container'>
              <img src={hoveredCity.image9} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in9name}</p>
                <p className='mapDataCont'>{hoveredCity.in9cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info9}</p>
              </div>
            </div>
          }
          { hoveredCity.info10 && 
            <div className='city-info-container'>
              <img src={hoveredCity.image10} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in10name}</p>
                <p className='mapDataCont'>{hoveredCity.in10cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info10}</p>
              </div>
            </div>
          }
          { hoveredCity.info11 && 
            <div className='city-info-container'>
              <img src={hoveredCity.image11} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in11name}</p>
                <p className='mapDataCont'>{hoveredCity.in11cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info11}</p>
              </div>
            </div>
          }
          { hoveredCity.info12 && 
            <div className='city-info-container'>
              <img src={hoveredCity.image12} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in12name}</p>
                <p className='mapDataCont'>{hoveredCity.in12cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info12}</p>
              </div>
            </div>
          }
          { hoveredCity.info13 && 
            <div className='city-info-container'>
              <img src={hoveredCity.image13} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in13name}</p>
                <p className='mapDataCont'>{hoveredCity.in13cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info13}</p>
              </div>
            </div>
          }
          { hoveredCity.info14 && 
            <div className='city-info-container'>
              <img src={hoveredCity.image14} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in14name}</p>
                <p className='mapDataCont'>{hoveredCity.in14cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info14}</p>
              </div>
            </div>
          }
          { hoveredCity.info15 && 
            <div className='city-info-container'>
              <img src={hoveredCity.image15} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in15name}</p>
                <p className='mapDataCont'>{hoveredCity.in15cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info15}</p>
              </div>
            </div>
          }
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;


