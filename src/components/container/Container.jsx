import { useContext } from "react";
import useStyles from "./container-styles";
import themeToggleContext from "../../context/themeToggle/context";

export default function Container({ children }) {
  const { isDarkTheme, darkThemeStyles, lightThemeStyles } =
    useContext(themeToggleContext);
  const containerColors = isDarkTheme ? darkThemeStyles : lightThemeStyles;
  const classes = useStyles(containerColors);

  return <div className={classes.container}>{children}</div>;
}
