import React from "react";
import "./styles/SignupScreen.css";

const SignupScreen = () => {
  return (
    <div className="signupScreen">
      <form>
        <h2>Sign In</h2>
        <input placeholder="Email Address" type="email" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>
        <p>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link">Sign up now.</span>
        </p>
      </form>
    </div>
  );
};

export default SignupScreen;
