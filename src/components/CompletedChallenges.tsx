import React from 'react';

import styles from '../styles/components/CompletedChallenges.module.css';

const CompletedChallenges: React.FC = () => (
  <div className={styles.completedChallengesContainer}>
    <span>Completed Challenges</span>
    <span>5</span>
  </div>
);

export default CompletedChallenges;
