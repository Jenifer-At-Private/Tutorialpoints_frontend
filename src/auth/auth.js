import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUp } from "../services/apiCalls";

import styles from "./style.module.css";

export const SignIn = ({ onAuthenticatedChange }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    signIn(user).then((data) => {
      onAuthenticatedChange(true);

      navigate("/");
    });
  };
  return (
    <div className={styles.authContainer}>
      <div className={styles.auth}>
        <div className={`centerText ${styles.authText}`}>Sign In</div>
        <div>
          <input
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            placeholder="Email"
          />
        </div>
        <div>
          <inupt
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className={`center`}>
          <button className={"button"} onClick={handleSignIn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSignUp = () => {
    signUp(user).then((data) => {
      navigate("/signin");
    });
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.auth}>
        <div className={`centerText ${styles.authText}`}>Sign Up</div>
        <div>
          <input
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className={`center`}>
          <button className={"button"} onClick={handleSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
