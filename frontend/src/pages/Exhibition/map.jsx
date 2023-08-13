import React, { useState } from 'react';
import europe from './europe.jpg' //import whatever images we need and add them in the cityData beside a image tag
import worldmap from './map.png';
import './WorldMap.css'; // Import CSS file
import './DropdownMenu.css';

const WorldMap = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const cityData = [
    { name: 'Europe', x: '45%', y: '37%', info: 'Info About Europe\nufsjhdifubwe\nuyfgwuefiwegfiuwegf\neuehfuigfhuysguiehduee\niuyfhwugfiugfweufgsef\nudhfbywejfbuiwfgbyufgbeuf',image:europe },
    { name: 'West USA', x: '15%', y: '37%', info: 'Info About West USA' },
    { name: 'East USA', x: '25%', y: '42%', info: 'Info About East USA' },
    { name: 'NorthEast Asia', x: '82%', y: '28%', info: 'Info About NorthEast Asia' },
    { name: 'Australia', x: '83%', y: '78%', info: 'Info About Australia' },
    { name: 'SouthEast Asia', x: '66%', y: '50%', info: 'Info About SouthEast Asia' },
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
          <h3>{hoveredCity.name}</h3>
          <img src={hoveredCity.image} alt={hoveredCity.name} className="dropdown-image" />
          <p>{hoveredCity.info}</p>
        </div>
      )}
    </div>
  );
};

export default WorldMap;


