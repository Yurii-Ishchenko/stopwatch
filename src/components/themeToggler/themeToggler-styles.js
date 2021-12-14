import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  darkTheme: {
    backgroundColor: "#333",
  },
  lightTheme: {
    backgroundColor: "#fff",
  },
  themeSwitch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 20,
    marginRight: 30,
  },
  themeSwitchControl: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    position: "relative",
    width: 64,
    height: 32,
    border: "4px solid #2196f3",
    borderRadius: "50em",
    padding: "3px 0",
    marginLeft: 5,
    marginRight: 5,
  },

  themeSwitchToggle: {
    position: "absolute",
    left: 0,
    top: 0,
    margin: 0,
    padding: 0,
    opacity: 0,
    height: 0,
    width: 0,
    pointerEvents: "none",
    "&:checked": {
      "& ~ $themeSwitchMarker": {
        transform: "translateX(35px)",
        backgroundColor: "#333",
      },
      "& + $themeSwitchTrack": {
        backgroundColor: "#fff",
      },
    },
  },

  themeSwitchTrack: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    color: "transparent",
    userSelect: "none",
    backgroundColor: "#333",
    borderRadius: "inherit",
    zIndex: 1,
    cursor: "pointer",
  },

  themeSwitchMarker: {
    position: "relative",
    backgroundColor: "#fff",
    width: "26px",
    height: "26px",
    borderRadius: "50%",
    zIndex: 2,
    pointerEvents: "none",
    transform: "translateX(3px)",
    transition: "transform 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
});

export default useStyles;
