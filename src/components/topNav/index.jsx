import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./style.module.css";

export const TopNav = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.topNav}>
      <div>
        <button
          onClick={() => {
            navigate("/signin");
          }}
          className={"button"}
        >
          Sign In
        </button>

        <button
          onClick={() => {
            navigate("/signup");
          }}
          className={"button"}
        >
          Sign Up
        </button>

        <button
          onClick={() => {
            navigate("/tutorial/add");
          }}
          className={"button"}
        >
          Add Tutorial
        </button>
      </div>
    </div>
  );
};
