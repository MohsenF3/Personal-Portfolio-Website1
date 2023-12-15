import { FaCog, FaSun, FaMoon } from "react-icons/fa";

import ThemeItem from "./themeItem.jsx";

import { themes } from "../data.jsx";

import "./theme.css";
import { useEffect, useState } from "react";

const getColor = () => {
  let color = "hsl(271, 76%, 53%)";
  if (localStorage.getItem("color")) {
    color = localStorage.getItem("color");
  }

  return color;
};

const getLight = () => {
  let light = "light-mod";
  if (localStorage.getItem("light")) {
    light = localStorage.getItem("light");
  }

  return light;
};

const Themes = () => {
  const [showTheme, setShowTheme] = useState(false);
  const [color, setColor] = useState(getColor());
  const [light, setLight] = useState(getLight());
  const toggleTheme = () => {
    setShowTheme(!showTheme);
  };

  const toggleLight = () => {
    if (light === "light-mod") {
      setLight("dark-mod");
    } else {
      setLight("light-mod");
    }
  };

  const changeColor = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]);

  useEffect(() => {
    document.documentElement.className = light;
    localStorage.setItem("light", light);
  }, [light]);

  return (
    <>
      <div className={showTheme ? "change-theme show-theme" : "change-theme"}>
        <div onClick={toggleTheme} className="change-theme-btn">
          <FaCog />
        </div>
        <div className="change-light-btn" onClick={toggleLight}>
          {light === "light-mod" ? <FaSun /> : <FaMoon />}
        </div>
        <div className="theme-top">
          <h3 className="theme-title">Style Switchers</h3>
          <div className="close-theme-btn" onClick={toggleTheme}>
            &times;
          </div>
        </div>
        <div className="theme-item">
          {themes.map((item, index) => {
            return (
              <ThemeItem
                key={index}
                {...item}
                changeColor={changeColor}
                toggleTheme={toggleTheme}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Themes;
