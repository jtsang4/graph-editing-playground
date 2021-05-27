import React, { useEffect, useRef } from 'react';
import LogicFlow from '@logicflow/core';
import '@logicflow/core/dist/style/index.css';
import styles from './app.module.scss';

export const Benchmark: React.FC<{}> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { width, height } = containerRef.current!.getBoundingClientRect();
    const data = {
      // 节点
      nodes: [
        {
          id: 50,
          type: 'rect',
          x: 520,
          y: 50,
          text: 'Hello',
        },
        {
          id: 21,
          type: 'rect',
          x: 720,
          y: 260,
          text: 'World!'
        },
        ...Array(498).fill(1).map((item, index) => {
          return {
            id: index + 22,
            type: 'rect',
            x: 720 + 5 * index,
            y: 260 + 5 * index,
            text: 'World!'
          };
        }),
      ],
      // 边
      edges: [
        {
          type: 'bezier',
          sourceNodeId: 50,
          targetNodeId: 21,
        },
      ],
    };
    const lf = new LogicFlow({
      container: containerRef.current!,
      stopScrollGraph: false,
      stopZoomGraph: false,
      width,
      height,
      grid: {
        type: 'dot',
        size: 10,
      },
    });
    lf.render(data);
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.graph} ref={containerRef} />
    </div>
  );
};
