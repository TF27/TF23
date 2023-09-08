import React, { useState } from 'react';
import europe from './assets/europe.jpg' //import whatever images we need and add them in the cityData beside a image tag
import worldmap from './assets/map.png';

const WorldMap = () => {
  const [hoveredCity, setHoveredCity] = useState(null);

  const cityData = [
    { name: 'Europe', x: '48%', y: '39%', info: 'Info About Europe\nufsjhdifubwe\nuyfgwuefiwegfiuwegf\neuehfuigfhuysguiehduee\niuyfhwugfiugfweufgsef\nudhfbywejfbuiwfgbyufgbeuf',image:europe },
    { name: 'West USA', x: '21%', y: '40%', info: 'Info About West USA' },
    { name: 'East USA', x: '28%', y: '47%', info: 'Info About East USA' },
    { name: 'NorthEast Asia', x: '76%', y: '37%', info: 'Info About NorthEast Asia' },
    { name: 'Australia', x: '77%', y: '78%', info: 'Info About Australia' },
    { name: 'SouthEast Asia', x: '64%', y: '55%', info: 'Info About SouthEast Asia' },
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
          <h3>{hoveredCity.name}</h3>
          <img src={hoveredCity.image} alt={hoveredCity.name} className="dropdown-image" />
          <p>{hoveredCity.info}</p>
        </div>
      )}
    </div>
  );
};

export default WorldMap;


