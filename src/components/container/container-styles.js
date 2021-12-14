import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: (containerColors) => containerColors.backgroundColor,
    color: (containerColors) => containerColors.color,
  },
});

export default useStyles;
