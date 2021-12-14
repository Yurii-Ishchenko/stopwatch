import { useContext } from "react";
import themeToggleContext from "../../context/themeToggle/context";
import useStyles from "./button-styles";

export default function Button({ children, onClick }) {
  const { isDarkTheme, darkThemeStyles, lightThemeStyles } =
    useContext(themeToggleContext);
  const buttonColors = isDarkTheme ? darkThemeStyles : lightThemeStyles;
  const classes = useStyles(buttonColors);

  return (
    <button type="button" className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
}
