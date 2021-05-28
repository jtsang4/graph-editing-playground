import React from 'react';
import styles from './index.module.scss';

interface Props {
  label: string;
}

export const NodeComponent: React.FC<Props> = (props) => {
  const { label } = props;
  return <div className={styles.container}>{label}</div>;
};
