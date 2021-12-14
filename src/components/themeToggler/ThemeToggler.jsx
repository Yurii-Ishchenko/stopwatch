import { useEffect, useContext } from "react";
import useStyles from "./themeToggler-styles";
import { MdOutlineBedtime, MdOutlineLightMode } from "react-icons/md";
import themeToggleContext from "../../context/themeToggle/context";
export default function ThemeToggler() {
  const { isDarkTheme, toggleTheme } = useContext(themeToggleContext);

  const classes = useStyles();

  useEffect(() => {
    if (isDarkTheme) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkTheme]);
  return (
    <div className={classes.themeSwitch}>
      <MdOutlineLightMode size="2.5em" />
      <div className={classes.themeSwitchControl}>
        <input
          onChange={toggleTheme}
          checked={isDarkTheme}
          className={classes.themeSwitchToggle}
          type="checkbox"
          name="theme"
          id="theme-switch-toggle"
          aria-label="Переключить между тёмной и светлой темой"
        />
        <label
          aria-hidden="true"
          className={classes.themeSwitchTrack}
          htmlFor="theme-switch-toggle"
        ></label>
        <div aria-hidden="true" className={classes.themeSwitchMarker}></div>
      </div>

      <MdOutlineBedtime size="2.5em" />
    </div>
  );
}
