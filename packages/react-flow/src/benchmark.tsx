import React from 'react';
import ReactFlow, { Elements } from 'react-flow-renderer';
import styles from './app.module.scss';

const elements: Elements = [
  {
    id: '1',
    type: 'input', // input node
    data: { label: 'Hello' },
    position: { x: 520, y: 50 },
  },
  // default node
  {
    id: '2',
    type: 'output',
    // you can also pass a React component as a label
    data: { label: <div>World!</div> },
    position: { x: 720, y: 260 },
  },
  // animated edge
  { id: 'e1-2', source: '1', target: '2' },
  ...Array(498)
    .fill(1)
    .map((item, index) => {
      return {
        id: `${index + 3}`,
        type: 'output',
        // you can also pass a React component as a label
        data: { label: <div>World!</div> },
        position: { x: 720 + 5 * index, y: 260 + 5 * index },
      };
    }),
];

export const Benchmark: React.FC<{}> = () => {
  return (
    <div className={styles.app}>
      <ReactFlow className={styles.graph} elements={elements} />
    </div>
  );
};
