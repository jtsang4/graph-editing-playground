import React from 'react';
import styles from './index.module.scss';

interface Props {
  
}

export const NodeComponent: React.FC<Props> = props => {
  return (
    <div className={styles.container}>
      node
    </div>
  );
};
