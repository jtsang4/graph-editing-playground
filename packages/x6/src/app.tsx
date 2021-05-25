import React, { useEffect, useRef } from 'react';
import { Graph } from '@antv/x6';
import '@antv/x6-react-shape';
import { CustomNode } from './shape/node';
import styles from './app.module.scss';

export const App: React.FC<{}> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = new Graph({
      container: containerRef.current!,
      grid: true,
    });

    const source = graph.addNode(
      new CustomNode({
        x: 520,
        y: 50,
        ports: [
          { id: '1', group: 'in' },
          { id: '2', group: 'out' },
        ],
      })
    );

    const target = graph.addNode(
      new CustomNode({
        x: 720,
        y: 260,
        ports: [
          { id: '3', group: 'in' },
          { id: '4', group: 'out' },
        ],
      })
    );

    graph.addEdge({
      source: {
        cell: source,
        port: '2'
      },
      target: {
        cell: target,
        port: '3',
      },
    });

    return () => {
      graph.dispose();
    };
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.graph} ref={containerRef} />
    </div>
  );
};
