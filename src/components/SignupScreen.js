import React, { useState, useRef } from "react";
import { auth } from "../firebase";
import "./styles/SignupScreen.css";

const SignupScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    console.log(emailRef.current.value, passwordRef.current.value);
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log({ authUser });
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log({ authUser });
      })
      .catch((err) => {
        console.log({ err });
      });
  };
  return (
    <div className="signupScreen">
      <form>
        <h2>Sign In</h2>
        <input placeholder="Email Address" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <p>
          <span className="signupScreen__gray">New to Netflix? </span>
          <span className="signupScreen__link" onClick={register}>
            Sign up now.
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignupScreen;
