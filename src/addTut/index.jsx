import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TopNav } from "../components/topNav";
import { addTutorial } from "../services/apiCalls";

import styles from "./style.module.css";

// {
//   id: "",
//   title: "",
//   subSection: [
//     {
//       id: "",
//       title: "",
//       description: "",
//     },
//   ],
// }

export const AddTut = ({ data, onDataChange }) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/tutorial/add/section");
  };

  return (
    <div className={styles.addTut}>
      <TopNav />
      <div className={styles.addableSection}>
        <div>Title of the tutorial</div>
        <div>
          <input
            onChange={(e) => {
              // setTitle(e.target.value);
              onDataChange({ ...data, title: e.target.value });
            }}
            type="text"
          />
        </div>
      </div>
      <div className={styles.addableSection}>
        <div>Descripiton of the tutorial</div>
        <div>
          <textarea
            onChange={(e) => {
              onDataChange({ ...data, description: e.target.value });
            }}
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>

      <div className={styles.addableSection}>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export function Form({
  formName,
  numberOfSubSections,
  submitNeeded,
  onAddSection,
  data,
  onDataChange,
}) {
  const [subSectionCount, setSubSectionCount] = useState(0);

  const navigate = useNavigate();

  const onSubmit = () => {
    onDataChange({ ...data, subSectionCount: subSectionCount });
    navigate("/tutorial/add/subsection");
  };

  return (
    <>
      <div className={styles.addableSection}>
        <div>Enter {formName} Title</div>
        <div>
          <textarea
            onChange={(e) => {
              onDataChange({
                ...data,
                sections: [{ ...data.sections[0], title: e.target.value }],
              });
            }}
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
      <div className={styles.addableSection}>
        <div>Enter {formName} Title Description</div>
        <div>
          <textarea
            onChange={(e) => {
              onDataChange({
                ...data,
                sections: [
                  { ...data.sections[0], description: e.target.value },
                ],
              });
            }}
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>

      {numberOfSubSections && (
        <div className={styles.addableSection}>
          <div>Number of sub sections</div>
          <div>
            <textarea
              onChange={(e) => {
                setSubSectionCount(e.target.value);
              }}
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      )}
      {submitNeeded && (
        <div className={styles.addableSection} onSubmit={onSubmit}>
          <button onClick={onSubmit}>Submit</button>
        </div>
      )}
    </>
  );
}

export function AddSubSection({ data, onDataChange, subSectionCount }) {
  const onAddTutorial = () => {
    addTutorial({
      title: data.title,
      description: data.description,
      section: data.section,
    });
  };

  return (
    <>
      {[...Array(subSectionCount)].map((subSection) => {
        return (
          <Form
            data={data}
            onDataChange={onDataChange}
            formName={"Sub Section"}
          />
        );
      })}
      <div className={styles.addableSection}>
        <button onClick={onAddTutorial}>Submit</button>
      </div>
    </>
  );
}
