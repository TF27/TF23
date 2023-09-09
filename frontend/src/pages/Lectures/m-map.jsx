import React, { useState, useEffect } from "react";
import "./m-map.css";
// import Europe from "./assets copy/europe.jpg";
// import Astro from "./assets copy/europe.jpg";

const MapClick = () => {
  

  const cityData = [
    // {
    //   name: "Europe",
    //   x: "45%",
    //   y: "37%",
    //   info: "Info About Europe",
    //   image: Europe,
    // },
    // {
    //   name: "West USA",
    //   x: "15%",
    //   y: "37%",
    //   info: "Info About West USA",
    //   image: Astro,
    // },
    // {
    //   name: "East USA",
    //   x: "25%",
    //   y: "42%",
    //   info: "Info About East USA",
    //   image: Europe,
    // },
    // {
    //   name: "NorthEast Asia",
    //   x: "82%",
    //   y: "28%",
    //   info: "Info About NorthEast Asia",
    //   image: Europe,
    // },
    // {
    //   name: "Australia",
    //   x: "83%",
    //   y: "78%",
    //   info: "Info About Australia",
    //   image: Europe,
    // },
    // {
    //   name: "SouthEast Asia",
    //   x: "66%",
    //   y: "50%",
    //   info: "Info About SouthEast Asia",
    //   image: Europe,
    // },
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
                <p className="city-name-over-image">{selectedCity.name}</p>
              </div>
              <div className="city-info-container">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="ddinfo"
                />
                <p className="m-ex-info-styling">{selectedCity.info}</p>
              </div>{" "}
              <div className="city-info-container">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="ddinfo"
                />
                <p className="ex-info-styling">{selectedCity.info}</p>
              </div>
              <div className="city-info-container">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="ddinfo"
                />
                <p className="ex-info-styling">{selectedCity.info}</p>
              </div>
              <div className="city-info-container">
                <img
                  src={selectedCity.image}
                  alt={selectedCity.name}
                  className="ddinfo"
                />
                <p className="ex-info-styling">{selectedCity.info}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapClick;
