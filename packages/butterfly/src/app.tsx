import React, { useState, useEffect } from 'react';
import ReactButterfly from 'butterfly-react';
import produce from 'immer';
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

export const App: React.FC<{}> = () => {
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

  useEffect(() => {
    setTimeout(() => {
      console.log('更新画布');
      setData(produce(prevData => {
        prevData.nodes[0].render = () => {
          return <NodeComponent label="Hello," />;
        };
        prevData.nodes[1].render = () => {
          return <NodeComponent label="World." />;
        };
      }));
    }, 2000);
  }, []);

  return (
    <div className={styles.app}>
      <ReactButterfly {...data} />
    </div>
  );
};
