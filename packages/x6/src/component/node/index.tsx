import React from 'react';
import type { Node } from '@antv/x6';
import styles from './index.module.scss';

interface Props {
  node: Node;
}

export const NodeComponent: React.FC<Props> = props => {
  const { node } = props;
  const data = node.data;
  return (
    <div className={styles.container}>
      {data?.label}
    </div>
  );
};
