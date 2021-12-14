import { useState, useRef } from "react";
import {
  BsFillPauseFill,
  BsFillStopFill,
  BsFillPlayFill,
} from "react-icons/bs";
import Button from "../button/Button";
import useStyles from "./stopWatch-styles";
import { getTimeComponents } from "../../utils/timeFns";

export default function StopWatch() {
  const [prevTime, setPrevTime] = useState(0);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isShowStopBtn, setIsShowStopBtn] = useState(false);
  const intervalId = useRef(null);

  const classes = useStyles();

  const startTimer = () => {
    setPrevTime((prev) => prev + time);
    setIsActive(true);
    const startTime = Date.now();
    intervalId.current = window.setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      setTime(deltaTime);
    }, 10);
  };

  const stopTimer = () => {
    setIsActive(false);
    clearInterval(intervalId.current);
    setTime(0);
    setPrevTime(0);
  };

  const onStopBntClick = () => {
    stopTimer();
    setIsShowStopBtn(false);
  };

  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(intervalId.current);
  };

  const toggleStartPauseTimer = () => {
    setIsShowStopBtn(true);
    if (isActive) {
      return pauseTimer();
    }
    return startTimer();
  };
  const allTime = time + prevTime;
  const { hours, mins, secs, milliSecs } = getTimeComponents(allTime);

  const renderStopWatchString = `${hours}:${mins}:${secs}:${milliSecs}`;
  return (
    <div>
      <div className={classes.renderStringContainer}>
        <p className={classes.renderString}>{renderStopWatchString}</p>
      </div>

      <div className={classes.buttonThumb}>
        <Button onClick={toggleStartPauseTimer}>
          {isActive ? (
            <BsFillPauseFill size="2.5em" color="#2196f3" />
          ) : (
            <BsFillPlayFill size="2.5em" color="#2196f3" />
          )}
        </Button>

        {isShowStopBtn && (
          <Button onClick={onStopBntClick}>
            <BsFillStopFill size="2.5em" color="#2196f3" />
          </Button>
        )}
      </div>
    </div>
  );
}
