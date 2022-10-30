import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "./Nav";
import "./styles/ProfileScreen.css";
const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (Current Plan: Premium)</h3>
              <h4>Renewal date: 30/10/2022</h4>
              <div className="profileScreen__plan">
                <span className="profileScreen__planInfo">
                  <span className="profileScreen__planName">
                    Netflix Standard
                  </span>
                  <span className="profileScreen__planRes">1080p</span>
                </span>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen__plan">
                <span className="profileScreen__planInfo">
                  <span className="profileScreen__planName">Netflix Basic</span>
                  <span className="profileScreen__planRes">480p</span>
                </span>
                <button>Subscribe</button>
              </div>
              <div className="profileScreen__plan">
                <span className="profileScreen__planInfo">
                  <span className="profileScreen__planName">
                    Netflix Premium
                  </span>
                  <span className="profileScreen__planRes">4K+HDR</span>
                </span>
                <button className="profileScreen__currentPlan">
                  Current Package
                </button>
              </div>
              <button
                className="profileScreen__signOut"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
