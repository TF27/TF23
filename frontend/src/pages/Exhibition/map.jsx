import React, { useState } from 'react';
import europe from './assets/europe.jpg' //import whatever images we need and add them in the cityData beside a image tag
import worldmap from './assets/map.png';
// import im1 from './assets/mapContent/img1.png'
import './WorldMap.css'; // Import CSS file
import './DropdownMenu.css';

// importing map content
// East europe
import bhuman from './assets/mapContent/easteurope/bhuman.jpg';
import daniel from './assets/mapContent/easteurope/daniel.jpg';
import EE from './assets/mapContent/easteurope/EE.jpg';
import furhat from './assets/mapContent/easteurope/furhat.jpg';
import moonrover from './assets/mapContent/easteurope/moonrover.jpg';
import armalab from './assets/mapContent/easteurope/armalab.jpg';
import fable from './assets/mapContent/easteurope/fable.jpg';

// West europe
import gravity from './assets/mapContent/westeurope/gravity.jpg';
import nao from './assets/mapContent/westeurope/nao.jpg';
import pal from './assets/mapContent/westeurope/pal.jpg';
import raptor from './assets/mapContent/westeurope/raptor.jpg';
import sepios from './assets/mapContent/westeurope/sepios.jpg';
import skelex from './assets/mapContent/westeurope/skelex.jpg';
import spacehopper from './assets/mapContent/westeurope/spacehopper.jpg';
import uav from './assets/mapContent/westeurope/uav.jpg';
import WE from './assets/mapContent/westeurope/WE.jpg';

// East USA
import astro from './assets/mapContent/eastusa/astro.jpg';
import EU from './assets/mapContent/eastusa/EU.jpg';
import flir from './assets/mapContent/eastusa/flir.jpg';
import grammy from './assets/mapContent/eastusa/grammy.jpg';
import neurosky from './assets/mapContent/eastusa/neurosky.jpg';
import roboti from './assets/mapContent/eastusa/roboti.jpg';
import texas from './assets/mapContent/eastusa/texas.jpg';

// West USA
import bina from './assets/mapContent/westusa/bina.jpg';
import botany from './assets/mapContent/westusa/botany.jpg';
import hyper from './assets/mapContent/westusa/hyper.jpg';
import netradyne from './assets/mapContent/westusa/netradyne.jpg';
import petoi from './assets/mapContent/westusa/petoi.jpg';
import synergy from './assets/mapContent/westusa/synergy.jpg';
import ubiquiti from './assets/mapContent/westusa/ubiquiti.jpg';
import WU from './assets/mapContent/westusa/WU.jpg';

// Northe East Asia
// import alter from './assets/mapContent/northeastasia/alter.jpg';
// import android from './assets/mapContent/northeastasia/android.jpg';
// import alter from './assets/mapContent/northeastasia/alter.jpg';
// import alter from './assets/mapContent/northeastasia/alter.jpg';
// import alter from './assets/mapContent/northeastasia/alter.jpg';
// import alter from './assets/mapContent/northeastasia/alter.jpg';
// import alter from './assets/mapContent/northeastasia/alter.jpg';
// import alter from './assets/mapContent/northeastasia/alter.jpg';
// import alter from './assets/mapContent/northeastasia/alter.jpg';

const WorldMap = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const cityData = [
    { name: 'East Europe', x: '53%', y: '37%', info: 'Info About East Europe', in1name: 'Moon Rover',in2name: 'B-Human',in3name: 'Furhat Robotics',in4name: 'Daniel | HD Robotics',in5name: 'ARMA LAB Prosthetics',in6name: 'Fable | Shape Robotics', in1cont: 'Hungary',in2cont: 'Germany',in3cont: 'Sweden',in4cont: 'Hungary',in5cont: 'Hungary',in6cont: 'Denmark', info1: 'The Puli rover is a low-cost platform designed to carry different payloads to probe for water ice on Moon', info2: 'B-Human, one of the best teams in RoboCup SPL, has won the world championship eight times!', info3: 'A combination of facial animation and replaceable masks, Furhat creates life-like, expressive characters', info4: 'Daniel is a pioneering robot capable of complex humanoid movements with inverse kinematic calculations', info5: 'These unique arm prosthetics enable physical activities like cycling, motorsports, jet-skiing, and more!', info6: 'A modular construction system to create personalized robot in minutes, Fables effectively teaches STEM', image: EE, image1: moonrover, image2: bhuman, image3: furhat, image4: daniel, image5: armalab, image6: fable },
    { name: 'West Europe', x: '47%', y: '37%', info: 'Info About West Europe',in1name: 'Gravity Industries',in2name: 'Nao | Soft Bank Group',in3name: 'Pal V Robotics',in4name: 'Sepios | ETH Zurich',in5name: 'Skelex',in6name: 'UAV works',in7name: 'RAPTOR, ETH Zurich',in8name: 'SpaceHopper, ETH Zurich',in1cont: 'UK',in2cont: 'France',in3cont: 'Netherlands',in4cont: 'Switzerland',in5cont: 'Netherlands',in6cont: 'Spain',in7cont: 'Switzerland',in8cont: 'Switzerland', info1: 'Daedalus, an exoskeleton that enables humans to fly, has an impressive speed of up to 85 miles per hour', info2: 'This humanoid robot welcomes, informs, and entertains visitors at companies and healthcare centers', info3: 'Pal V Robotics, makers of the world\'s first flying car, take inspiration from nature and ensure safety with fun', info4: 'Sepios is an elite nautical vehicle with its omnidirectionality, high maneuverability, and special fins!', info5: 'Skelex, world\'s first upper-body exoskeleton that augments strength while providing complete freedom of motion', info6: 'UAV Works values innovation, development, and research on aerospace engineering in all of its projects', info7: 'A 1.8m wingspan UAV, equipped with advanced sensors, 100 km/h speed, 50 km range, and versatile payload capacity', info8: 'A compact, agile, and autonomous planetary exploration robot with advanced scientific capabilities', image: WE,image1: gravity, image2: nao, image3: pal, image4: sepios, image5: skelex, image6: uav,image7: raptor, image8: spacehopper },
    { name: 'West USA', x: '15%', y: '37%', info: 'Info About West USA',in1name: 'Virgin Hyperloop',in2name: 'Petoi',in3name: 'CyBorg Botany',in4name: 'Synergy Moon',in5name: 'Ubiquity Robotics',in6name: 'Bina 48',in7name: 'Netradyne',in1cont: 'USA',in2cont: 'USA',in3cont: 'USA',in4cont: 'USA',in5cont: 'USA',in6cont: 'USA',in7cont: 'USA',info1: 'Working towards commercializing high-speed transportation, Virgin Hyperloop easily delivers airline speeds',info2: 'Maker of futuristic programmable robotics, Petoii is sophisticated and aims for affordable robotic pets',info3: 'Their aim is to merge and power electronic functionalities with the existing biological functions of living plants',info4: 'Synergy Moon is dedicated to the development of cutting-edge space technologies and related services',info5: 'Ubiquity Robotics believes that robotics, automation, and AI will be key to solving global challenges',info6: 'BINA48 is a robotic face combined with the chatbot functionalities, enabling conversation facilities',info7: 'AI-powered fleet safety solutions for enhanced driver monitoring and road analytics', image: WU, image1: hyper, image2: petoi, image3: botany, image4: synergy, image5: ubiquiti, image6: bina, image7: netradyne},
    { name: 'East USA', x: '25%', y: '42%', info: 'Info About East USA', in1name: 'University of Texas',in2name: 'Neurosky',in3name: 'RoboTiCan',in4name: 'GRAMMY Robot',in5name: 'AstroBee | NASA & ISS',in6name: 'Flir Systems',in1cont: 'USA',in2cont: 'USA',in3cont: 'USA',in4cont: 'USA',in5cont: 'USA',in6cont: 'USA',info1: 'Harmony Exoskeleton is designed for easing upper body movements of subjects with severe disabilities',info2: 'Its colorful visuals provide positive reinforcement while developing skills of attention and mental relaxation',info3: 'RoboTican innovates, develops, and manufactures autonomous UAVs, UGVs, and hybrid systems',info4: 'This is an interactive robot for retail shops and indoor events that can talk to clients and navigate indoors!',info5: 'Astrobee reduces the time astronauts spend on routine duties to focus on things that only humans can do',info6: 'FLIR Machine Vision Cameras have captured HD footage of NASA\'s Perseverance rover landing on Mars', image: EU, image1: texas, image2: neurosky, image3: roboti, image4: grammy, image5: astro, image6: flir},
    { name: 'NorthEast Asia', x: '82%', y: '28%', info: 'Info About NorthEast Asia', image: europe },
    { name: 'SouthEast Asia', x: '66%', y: '50%', info: 'Info About SouthEast Asia', image: europe },
    // Add more cities and their coordinates here
  ];

  const handleCityHover = (city) => {
    setHoveredCity(city);
  };

  return (
    <div className="world-map-container" style={{ position: 'relative' }}>
      <div><h1>TOP HIGHLIGHTS </h1></div>
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
            <div className='city-info-container'>
              <img src={hoveredCity.image1} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in1name}</p>
                <p className='mapDataCont'>{hoveredCity.in1cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info1}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={hoveredCity.image2} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in2name}</p>
                <p className='mapDataCont'>{hoveredCity.in2cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info2}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={hoveredCity.image3} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in3name}</p>
                <p className='mapDataCont'>{hoveredCity.in3cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info3}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={hoveredCity.image4} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in4name}</p>
                <p className='mapDataCont'>{hoveredCity.in4cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info4}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={hoveredCity.image5} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in5name}</p>
                <p className='mapDataCont'>{hoveredCity.in5cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info5}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={hoveredCity.image6} alt={hoveredCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{hoveredCity.in6name}</p>
                <p className='mapDataCont'>{hoveredCity.in6cont}</p>
                <p className='ex-info-styling'>{hoveredCity.info6}</p>
              </div>
            </div>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default WorldMap;


