import { useState } from "react";
import Close from "../assets/close.svg";

const PortfolioItem = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="portfolio-item">
        <img src={img} alt="Portfolio image" className="portfolio-img" />

        <div className="portfolio-hover" onClick={toggleModal}>
          <h3 className="portfolio-hover-title">{title}</h3>
        </div>

        {modal && (
          <div className="portfolio-modal">
            <div className="portfolio-modal-content">
              <img
                onClick={toggleModal}
                src={Close}
                alt="Portfolio Close"
                className="portfolio-close"
              />
              <h3 className="modal-title">{title}</h3>

              <ul className="modal-list grid">
                {details.map(({ icon, title, desc }, index) => {
                  return (
                    <li className="modal-item" key={index}>
                      <span className="modal-list-icon">{icon}</span>

                      <div className="">
                        <span className="modal-list-title">{title}</span>
                        <span className="modal-list-description">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <img
                src={img}
                alt="Portfolio Modal image"
                className="portfolio-modal-img"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PortfolioItem;
