import React from 'react';
import ReactButterfly from 'butterfly-react';
import styles from './app.module.scss';

const endpoints = [
  {
    id: 'right',
    orientation: [1, 0],
    pos: [0, 0.5]
  },
  {
    id: 'left',
    orientation: [-1, 0],
    pos: [0, 0.5]
  }
];

const data = {
  groups: [
    {
      id: '1',
      left: 10,
      top: 100,
      render() {
        return (
          <div style={{width:'250px',textAlign:'center',backgroundColor:'blanchedalmond'}}>
            测试group
          </div>
        )
      }
    }
  ],
  nodes: [
    {
      id: '1',
      group:'1',
      endpoints: endpoints,
      render() {
        return (
          <div>
            测试节点1
          </div>
        );
      }
    },
    {
      id: '2',
      top: 25,
      left: 300,
      endpoints: endpoints,
      render() {
        return (
          <div>
            测试节点2
          </div>
        );
      }
    },
    {
      id: '3',
      top: 25,
      left: 600,
      endpoints: endpoints,
    }
  ],
  edges: [
    {
      id: '1-2',
      sourceNode: '1',
      targetNode: '2',
      source: 'right',
      target: 'left',
      labelRender: () => {
        return '测试label';
      }
    }
  ],
};

export const App: React.FC<{}> = () => {
  return (
    <div className={styles.app}>
      <ReactButterfly {...data} />
    </div>
  );
};
