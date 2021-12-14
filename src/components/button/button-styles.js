import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  button: {
    width: 60,
    height: 60,
    border: (buttonColors) => `4px solid ${buttonColors.color}`,
    backgroundColor: (buttonColors) => buttonColors.backgroundColor,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});

export default useStyles;
