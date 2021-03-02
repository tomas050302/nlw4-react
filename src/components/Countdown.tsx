import React, { useEffect, useState } from 'react';

import styles from '../styles/components/Countdown.module.css';

const Countdown: React.FC = () => {
  const [time, setTime] = useState(25 * 60);
  const [countdownActive, setCountdownActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setCountdownActive(true);
  }

  useEffect(() => {
    console.log(minutes);
    if (countdownActive && time > 0) {
      setTimeout(() => {
        setTime(currentTime => currentTime - 1);
      }, 1000);
    }
  }, []);

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={startCountdown}
        className={styles.startCountdownButton}
      >
        Start Cycle
      </button>
    </div>
  );
};

export default Countdown;