import { Link } from "react-router-dom";

import pro from "../../assets/me1.jpg";
import { FaArrowRight } from "react-icons/fa";

import "./home.css";

const Home = () => {
  return (
    <>
      <section className="home section grid">
        <img src={pro} alt="home image" className="home-img" />
        <div className="home-content">
          <h1 className="home-title">
            <span>I'm Mohsen/</span> <br />
            Front-end Developer
          </h1>
          <p className="home-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            et porro sed sit atque maxime? Consectetur quo obcaecati atque
            voluptatum necessitatibus sint natus adipisci et?
          </p>
          <Link to="/about" className="btn">
            More about me{" "}
            <span className="btn-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
