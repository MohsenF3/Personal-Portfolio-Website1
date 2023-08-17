import { skills } from "../data.jsx";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress-box" key={index}>
            <div className="progress-circle">
              <CircularProgressbar
                strokeWidth={7}
                value={percentage}
                text={`${percentage}%`}
              />
            </div>
            <h3 className="skills-title">{title}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Skills;
