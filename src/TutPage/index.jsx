import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getTutorial } from "../services/apiCalls";

import styles from "./style.module.css";

export const TutPage = () => {
  const [activeSection, setActiveSection] = useState(null);

  const [data, setData] = useState(null);

  const { tutorialId } = useParams();

  useEffect(() => {
    getTutorial().then((value) => {
      setData(value);
    });
  }, []);

  return (
    <div className={styles.tutPage}>
      <div className={styles.leftNav}>
        <div>
          <div className={styles.learnCourse}>Learn Course</div>
          <div className={styles.absBeginner}>Absolute Beginners</div>
          <div className={styles.bottomCont}></div>
          <div>
            {data?.sections?.map((section) => {
              return (
                <div
                  onClick={() => {
                    setActiveSection(section);
                  }}
                  key={section.title}
                  className={styles.menuItem}
                >
                  {section.title}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.tutorial}>
        {activeSection && (
          <>
            <div className={styles?.mainTitle}>{data?.title}</div>

            <React.Fragment key={activeSection?.title}>
              <div className={styles.sectionTitle}>{activeSection?.title}</div>
              <div>{activeSection?.description}</div>
              <div>
                {activeSection?.subSection?.map((subsection) => {
                  return (
                    <React.Fragment key={subsection.title}>
                      <div className={styles.subSectionHead}>
                        {subsection.title}
                      </div>
                      <div>{subsection.description}</div>
                    </React.Fragment>
                  );
                })}
              </div>
            </React.Fragment>
          </>
        )}
      </div>
    </div>
  );
};
