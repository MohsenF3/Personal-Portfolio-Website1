import States from "../../components/States";
import Info from "../../components/info";
import Skills from "../../components/skills.jsx";
import ResumeItem from "../../components/resumeItem";
import { resume } from "../../data";

import { FaDownload } from "react-icons/fa";

import Pdf from "../../assets/my.pdf";
import "./about.css";

const About = () => {
  return (
    <>
      <main className="section container">
        <section className="  about">
          <h1 className="section-title">
            About <span>Me</span>
          </h1>

          <div className="about-container grid">
            <div className="about-info">
              <h3 className="section-subtitle">Personal Info</h3>
              <ul className="info-list grid">
                <Info />
              </ul>
              <a href={Pdf} download="" className="btn">
                Download PDF
                <span className="btn-icon">
                  <FaDownload />
                </span>
              </a>
            </div>

            <div className="states grid">
              <States />
            </div>
          </div>
        </section>

        <div className="seperator"></div>

        <section className="skills">
          <h3 className="section-subtitle skills-subtitle">My Skills</h3>
          <div className="skills-container grid">
            <Skills />
          </div>
        </section>

        <div className="seperator"></div>

        <section className="resume">
          <h3 className="section-subtitle skills-subtitle">
            Experience & Education
          </h3>

          <div className="resume-container grid">
            <div className="resume-date">
              {resume.map((item) => {
                if (item.category === "experience") {
                  return <ResumeItem key={item.id} {...item} />;
                }
              })}
            </div>
            <div className="resume-date">
              {resume.map((item) => {
                if (item.category === "education") {
                  return <ResumeItem key={item.id} {...item} />;
                }
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
