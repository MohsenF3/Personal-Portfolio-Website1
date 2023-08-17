import parse from "html-react-parser";

const ResumeItem = ({ icon, year, title, desc }) => {
  return (
    <>
      <div className="resume-item">
        <div className="resume-icon">{icon}</div>
        <span className="resume-year">{year}</span>
        <h3 className="resume-title">{parse(title)}</h3>
        <p className="resume-description">{desc}</p>
      </div>
    </>
  );
};

export default ResumeItem;
