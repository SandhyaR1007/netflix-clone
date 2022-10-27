import React, { useState } from "react";
import SignupScreen from "./SignupScreen";
import "./styles/LoginScreen.css";
const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          src="https://pngimg.com/uploads/netflix/netflix_PNG25.png"
          alt=""
          className="loginScreen__logo"
        />
        <button
          className="loginScreen__button"
          onClick={() => setSignIn(!signIn)}
        >
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input placeholder="Email address" type="email" />
                <button
                  className="loginScreen__getStartedBtn"
                  onClick={() => setSignIn(!signIn)}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
