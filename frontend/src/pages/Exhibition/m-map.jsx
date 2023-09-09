import React, { useState, useEffect } from "react";
import "../Lectures/m-map.css";

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
import alter from './assets/mapContent/northeastasia/alter.jpg';
import android from './assets/mapContent/northeastasia/android.jpg';
import einstein from './assets/mapContent/northeastasia/einstein.jpg';
import kebbi from './assets/mapContent/northeastasia/kebbi.jpg';
import nextage from './assets/mapContent/northeastasia/nextage.jpg';
import NEA from './assets/mapContent/northeastasia/NEA.jpg';
import sophia from './assets/mapContent/northeastasia/sophia.jpg';
import Unitree from './assets/mapContent/northeastasia/Unitree.jpg';
import vex from './assets/mapContent/northeastasia/vex.jpg';

// South East Asia
import aerohans from './assets/mapContent/southwestasia/aerohans.jpg';
import brmohos from './assets/mapContent/southwestasia/brmohos.jpg';
import ideaforge from './assets/mapContent/southwestasia/Ideaforge.jpg';
import indro from './assets/mapContent/southwestasia/indro.jpg';
import marksman from './assets/mapContent/southwestasia/marksman.jpg';
import nadine from './assets/mapContent/southwestasia/nadine.jpg';
import SWA from './assets/mapContent/southwestasia/SWA.jpg';
import walle from './assets/mapContent/southwestasia/walle.jpg';
import zipline from './assets/mapContent/southwestasia/zipline.jpg';

const MapClick = () => {

    const cityData = [
        { name: 'East Europe', x: '53%', y: '37%', info: 'Info About East Europe', in1name: 'Moon Rover',in2name: 'B-Human',in3name: 'Furhat Robotics',in4name: 'Daniel | HD Robotics',in5name: 'ARMA LAB Prosthetics',in6name: 'Fable | Shape Robotics', in1cont: 'Hungary',in2cont: 'Germany',in3cont: 'Sweden',in4cont: 'Hungary',in5cont: 'Hungary',in6cont: 'Denmark', info1: 'The Puli rover is a low-cost platform designed to carry different payloads to probe for water ice on Moon', info2: 'B-Human, one of the best teams in RoboCup SPL, has won the world championship eight times!', info3: 'A combination of facial animation and replaceable masks, Furhat creates life-like, expressive characters', info4: 'Daniel is a pioneering robot capable of complex humanoid movements with inverse kinematic calculations', info5: 'These unique arm prosthetics enable physical activities like cycling, motorsports, jet-skiing, and more!', info6: 'A modular construction system to create personalized robot in minutes, Fables effectively teaches STEM', image: EE, image1: moonrover, image2: bhuman, image3: furhat, image4: daniel, image5: armalab, image6: fable },
        { name: 'West Europe', x: '47%', y: '37%', info: 'Info About West Europe',in1name: 'Gravity Industries',in2name: 'Nao | Soft Bank Group',in3name: 'Pal V Robotics',in4name: 'Sepios | ETH Zurich',in5name: 'Skelex',in6name: 'UAV works',in7name: 'RAPTOR, ETH Zurich',in8name: 'SpaceHopper, ETH Zurich',in1cont: 'UK',in2cont: 'France',in3cont: 'Netherlands',in4cont: 'Switzerland',in5cont: 'Netherlands',in6cont: 'Spain',in7cont: 'Switzerland',in8cont: 'Switzerland', info1: 'Daedalus, an exoskeleton that enables humans to fly, has an impressive speed of up to 85 miles per hour', info2: 'This humanoid robot welcomes, informs, and entertains visitors at companies and healthcare centers', info3: 'Pal V Robotics, makers of the world\'s first flying car, take inspiration from nature and ensure safety with fun', info4: 'Sepios is an elite nautical vehicle with its omnidirectionality, high maneuverability, and special fins!', info5: 'Skelex, world\'s first upper-body exoskeleton that augments strength while providing complete freedom of motion', info6: 'UAV Works values innovation, development, and research on aerospace engineering in all of its projects', info7: 'A 1.8m wingspan UAV, equipped with advanced sensors, 100 km/h speed, 50 km range, and versatile payload capacity', info8: 'A compact, agile, and autonomous planetary exploration robot with advanced scientific capabilities', image: WE,image1: gravity, image2: nao, image3: pal, image4: sepios, image5: skelex, image6: uav,image7: raptor, image8: spacehopper },
        { name: 'West USA', x: '15%', y: '37%', info: 'Info About West USA',in1name: 'Virgin Hyperloop',in2name: 'Petoi',in3name: 'CyBorg Botany',in4name: 'Synergy Moon',in5name: 'Ubiquity Robotics',in6name: 'Bina 48',in7name: 'Netradyne',in1cont: 'USA',in2cont: 'USA',in3cont: 'USA',in4cont: 'USA',in5cont: 'USA',in6cont: 'USA',in7cont: 'USA',info1: 'Working towards commercializing high-speed transportation, Virgin Hyperloop easily delivers airline speeds',info2: 'Maker of futuristic programmable robotics, Petoii is sophisticated and aims for affordable robotic pets',info3: 'Their aim is to merge and power electronic functionalities with the existing biological functions of living plants',info4: 'Synergy Moon is dedicated to the development of cutting-edge space technologies and related services',info5: 'Ubiquity Robotics believes that robotics, automation, and AI will be key to solving global challenges',info6: 'BINA48 is a robotic face combined with the chatbot functionalities, enabling conversation facilities',info7: 'AI-powered fleet safety solutions for enhanced driver monitoring and road analytics', image: WU, image1: hyper, image2: petoi, image3: botany, image4: synergy, image5: ubiquiti, image6: bina, image7: netradyne},
        { name: 'East USA', x: '25%', y: '42%', info: 'Info About East USA', in1name: 'University of Texas',in2name: 'Neurosky',in3name: 'RoboTiCan',in4name: 'GRAMMY Robot',in5name: 'AstroBee | NASA & ISS',in6name: 'Flir Systems',in1cont: 'USA',in2cont: 'USA',in3cont: 'USA',in4cont: 'USA',in5cont: 'USA',in6cont: 'USA',info1: 'Harmony Exoskeleton is designed for easing upper body movements of subjects with severe disabilities',info2: 'Its colorful visuals provide positive reinforcement while developing skills of attention and mental relaxation',info3: 'RoboTican innovates, develops, and manufactures autonomous UAVs, UGVs, and hybrid systems',info4: 'This is an interactive robot for retail shops and indoor events that can talk to clients and navigate indoors!',info5: 'Astrobee reduces the time astronauts spend on routine duties to focus on things that only humans can do',info6: 'FLIR Machine Vision Cameras have captured HD footage of NASA\'s Perseverance rover landing on Mars', image: EU, image1: texas, image2: neurosky, image3: roboti, image4: grammy, image5: astro, image6: flir},
        { name: 'NorthEast Asia', x: '82%', y: '28%', info: 'Info About NorthEast Asia',info1: 'Nextage, an all-in-one Dual Arm Robot, is designed to coexist with people. It finds use in many workplaces',info2: 'Sophia, an advanced human-like robot, is the first robot to be granted the citizenship of a nation',info3: 'Alter 3 explores the future of human communication. It has even conducted Android Opera in Japan!',info4: 'Einstein Robot is an amazing conversationalist with a vast knowledge-base that inspires imagination',info5: 'One of the most sophisticated humanoids, Android U is an intelligent and dynamic Android from Japan!',info6: 'Educational robotics for all, VEX solutions span various levels of education with accessibility and scalablity',info7: 'Quadruped Robot, a first-of-its-kind, four-legged marvel capable of inspecting, constructing, and delivering tasks',info8: 'Kebbi is an AI-powered robot with the integration of AI vision, speech, and sensing abilities',in1name: 'Nextage',in2name: 'Sophia',in3name: 'Alter 3',in4name: 'Einstein Robot',in5name: 'Android U',in6name: 'Vex Robotics',in7name: 'Unitree',in8name: 'Kebbi',in1cont: 'Japan',in2cont: 'Hong Kong',in3cont: 'Japan',in4cont: 'Hong Kong',in5cont: 'Japan',in6cont: 'Hong Kong',in7cont: 'China',in8cont: 'China', image: NEA, image1: nextage, image2: sophia, image3: alter, image4: einstein, image5: android, image6: vex, image7: Unitree, image8: kebbi},
        { name: 'SouthWest Asia', x: '66%', y: '50%', info: 'Info About SouthWest Asia',info1: 'Nadine is a socially intelligent robot and change her “mood” depending on what is said in response to her',info2: 'A global leader in UAV technologies, Ideaforge develops drone solutions for a wide variety of applications',info3: 'India\'s tallest humanoid robot, INDRO, can carry a payload of more than 150 kilograms under the knee!',info4: 'India\'s first indigenous Air Taxi, AeroHans is aimed at curbing pollution via alternative modes of transport.',info5: 'It is a physical manifestation of the cute and curious WALL-E robot, made by the BRAC University',info6: 'The state-of-the-art technology behind this exhibit has made life-saving drone deliveries possible',info7: 'A supersonic cruise missile with Mach 2.8 speed, 290 km range, and precision strike capabilities',info8: 'India\'s first armored capsule-based bulletproof vehicle protects personnel from small arms and grenades',in1name: 'Nadine Social Robot',in2name: 'Ideaforge',in3name: 'Indro',in4name: 'AeroHans',in5name: 'WALL-E',in6name: 'Zipline',in7name: 'BrahMos',in8name: 'Mahindra, Defence Marksmen',in1cont: 'Singapore',in2cont: 'India',in3cont: 'India',in4cont: 'India',in5cont: 'Bangladesh',in6cont: 'Israel',in7cont: 'India',in8cont: 'India', image: SWA, image1: nadine, image2: ideaforge, image3: indro, image4: aerohans, image5: walle, image6: zipline, image7: brmohos, image8:marksman },
        // Add more cities and their coordinates here
      ];
    

  const europeData = cityData[0];
  const [selectedCity, setSelectedCity] = useState(europeData);

  const handleCityClick = (city) => {
    console.log("City clicked:", city);
    setSelectedCity(city);
  };

  return (
    
    <div className="outer1">
      <div className="world_map_container">
        <div>
          <h1>TOP HIGHLIGHTS </h1>
        </div>
        <div className="map_image"></div>
        {cityData.map((city, index) => (
          <div
            key={index}
            className="city-circle"
            style={{
              left: city.x,
              top: city.y,
            }}
            onClick={() => handleCityClick(city)}
          />
        ))}

        {selectedCity && (
          <div className="dropdown-menu7">
            <div className="dropdown-content">
              <div className="city-image-container">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="dropdown-image"
                />
                {/* <p className="city-name-over-image">{selectedCity.name}</p> */}
              </div>
              <div className='city-info-container'>
              <img src={selectedCity.image1} alt={selectedCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{selectedCity.in1name}</p>
                <p className='mapDataCont'>{selectedCity.in1cont}</p>
                <p className='ex-info-styling'>{selectedCity.info1}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={selectedCity.image2} alt={selectedCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{selectedCity.in2name}</p>
                <p className='mapDataCont'>{selectedCity.in2cont}</p>
                <p className='ex-info-styling'>{selectedCity.info2}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={selectedCity.image3} alt={selectedCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{selectedCity.in3name}</p>
                <p className='mapDataCont'>{selectedCity.in3cont}</p>
                <p className='ex-info-styling'>{selectedCity.info3}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={selectedCity.image4} alt={selectedCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{selectedCity.in4name}</p>
                <p className='mapDataCont'>{selectedCity.in4cont}</p>
                <p className='ex-info-styling'>{selectedCity.info4}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={selectedCity.image5} alt={selectedCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{selectedCity.in5name}</p>
                <p className='mapDataCont'>{selectedCity.in5cont}</p>
                <p className='ex-info-styling'>{selectedCity.info5}</p>
              </div>
            </div>
            <div className='city-info-container'>
              <img src={selectedCity.image6} alt={selectedCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{selectedCity.in6name}</p>
                <p className='mapDataCont'>{selectedCity.in6cont}</p>
                <p className='ex-info-styling'>{selectedCity.info6}</p>
              </div>
            </div>
            { selectedCity.info7 && <div className='city-info-container'>
              <img src={selectedCity.image7} alt={selectedCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{selectedCity.in7name}</p>
                <p className='mapDataCont'>{selectedCity.in7cont}</p>
                <p className='ex-info-styling'>{selectedCity.info7}</p>
              </div>
            </div>
            }
            { selectedCity.info8 && 
            <div className='city-info-container'>
              <img src={selectedCity.image8} alt={selectedCity.name} className="ddinfo" />
              <div className='mapData'>
                <p className='mapDataName'>{selectedCity.in8name}</p>
                <p className='mapDataCont'>{selectedCity.in8cont}</p>
                <p className='ex-info-styling'>{selectedCity.info8}</p>
              </div>
            </div>
          }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapClick;
