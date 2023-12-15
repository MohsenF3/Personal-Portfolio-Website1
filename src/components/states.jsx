import { stats } from "../data.jsx";
import parse from "html-react-parser";

const States = () => {
  return (
    <>
      {stats.map(({ no, title }, index) => {
        return (
          <div className="states-box" key={index}>
            <h2 className="states-no">{no}</h2>
            <p className="states-title">{parse(title)}</p>
          </div>
        );
      })}
    </>
  );
};

export default States;
