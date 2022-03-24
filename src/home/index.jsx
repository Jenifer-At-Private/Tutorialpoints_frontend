import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { TopNav } from "../components/topNav";
import { getTutorials } from "../services/apiCalls";

import styles from "./style.module.css";

export const Home = () => {
  const [tutorialList, setTutorialList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    getTutorials().then((data) => {
      setTutorialList(data);
    });
  }, []);

  return (
    <div>
      <TopNav />
      <div className={styles.board}>
        <div className={styles.boardHead}>TUTORIALS LIBRARY</div>
        <div className={styles.boardMsg}>Latest Technologies Tutorials</div>
      </div>
      <div className={styles.tutCont}>
        {tutorialList.map((tutorial) => (
          <TutCard
            onClick={() => {
              navigate(`/tutorial/${tutorial._id}`);
            }}
            key={tutorial._id}
            name={tutorial.title}
          />
        ))}
        {/* <TutCard
          // onClick={() => {
          //   navigate(`/tutorial/${tutorial._id}`);
          // }}
          // key={tutorial._id}
          name={"Python"}
        />
        <TutCard
          // onClick={() => {
          //   navigate(`/tutorial/${tutorial._id}`);
          // }}
          // key={tutorial._id}
          name={"Java"}
        />
        <TutCard
          // onClick={() => {
          //   navigate(`/tutorial/${tutorial._id}`);
          // }}
          // key={tutorial._id}
          name={"Microprocessor"}
        />
        <TutCard
          // onClick={() => {
          //   navigate(`/tutorial/${tutorial._id}`);
          // }}
          // key={tutorial._id}
          name={"Networking"}
        /> */}
      </div>
    </div>
  );
};

const TutCard = ({ name, ...props }) => {
  return (
    <div className={styles.tutCard} {...props}>
      {name}
    </div>
  );
};
