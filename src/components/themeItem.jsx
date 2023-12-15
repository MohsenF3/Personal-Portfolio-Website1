const ThemeItem = ({ img, color, changeColor, toggleTheme }) => {
  return (
    <>
      <img
        src={img}
        alt="Theme Color"
        className="theme-color"
        onClick={() => {
          return changeColor(color), toggleTheme();
        }}
      />
    </>
  );
};

export default ThemeItem;
