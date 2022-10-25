import React from "react";
import "./styles/Banner.css";
const Banner = () => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className="banner"
      //   "https://images.ctfassets.net/4cd45et68cgf/7JiW5JIJZaNi0LBJXQCuON/28ee69e49f0ca93e29adc4464e82f358/EN-US_MyNameS1_Teaser_Solo_Horizontal_RGB_PRE.jpg?w=2560"
      style={{
        backgroundImage: `url(
          
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png"
        )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie title</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">
          {truncate(
            `This is the movie descriptionThis is the movie description
            This is the movie description
            This is the movie description
            This is the movie description
            This is the movie description
            This is the movie description`,
            200
          )}
        </p>
      </div>
      {/* modifier */}
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
