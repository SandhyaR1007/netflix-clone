import React, { useEffect, useState } from "react";
import "./styles/Nav.css";
const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${showNav ? "nav__black" : ""}`}>
      <div className="nav__contents ">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          //src="https://e7.pngegg.com/pngimages/119/342/png-clipart-logo-netflix-nasdaq-nflx-brand-television-copywriter-floor-television-text.png"
          alt="netflix-logo"
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;
