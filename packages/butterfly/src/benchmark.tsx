import React, { useState, useEffect } from 'react';
import ReactButterfly from 'butterfly-react';
import { NodeComponent } from './component/node';
import styles from './app.module.scss';

const endpoints = [
  {
    id: 'top',
    orientation: [0, -1],
    pos: [0.5, 0],
  },
  {
    id: 'bottom',
    orientation: [0, 1],
    pos: [0.5, 0],
  },
];

export const Benchmark: React.FC<{}> = () => {
  const [data, setData] = useState({
    nodes: [
      {
        id: '1',
        top: 50,
        left: 520,
        endpoints: endpoints,
        render() {
          return <NodeComponent label="Hello" />;
        },
      },
      {
        id: '2',
        top: 260,
        left: 720,
        endpoints: endpoints,
        render() {
          return <NodeComponent label="World!" />;
        },
      },
      ...Array(498)
        .fill(1)
        .map((item, index) => {
          return {
            id: index.toString(),
            top: 260 + 5 * index,
            left: 720 + 5 * index,
            endpoints: endpoints,
            render() {
              return <NodeComponent label="World!" />;
            },
          };
        }),
    ],
    edges: [
      {
        id: '1-2',
        sourceNode: '1',
        targetNode: '2',
        source: 'bottom',
        target: 'top',
      },
    ],
  });

  return (
    <div className={styles.app}>
      <ReactButterfly {...data} />
    </div>
  );
};
