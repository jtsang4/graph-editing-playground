import React, { useEffect, useRef } from 'react';
import G6, { GraphData } from '@antv/g6';
import styles from './app.module.scss';

export const Benchmark: React.FC<{}> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { width, height } = containerRef.current!.getBoundingClientRect();
    // 定义数据源
    const data: GraphData = {
      // 点集
      nodes: [
        {
          id: 'node1',
          type: 'rect',
          x: 520,
          y: 50,
          label: 'Hello',
          anchorPoints: [
            [0.5, 0],
            [0.5, 1],
          ],
        },
        {
          id: 'node2',
          type: 'rect',
          x: 720,
          y: 260,
          label: 'World!',
          anchorPoints: [
            [0.5, 0],
            [0.5, 1],
          ],
        },
        ...Array(498)
          .fill(1)
          .map((item, index) => {
            return {
              id: `node${index + 3}`,
              type: 'rect',
              x: 720 + index * 5,
              y: 260 + index * 5,
              label: 'World!',
              anchorPoints: [
                [0.5, 0],
                [0.5, 1],
              ],
            };
          }),
      ],
      // 边集
      edges: [
        // 表示一条从 node1 节点连接到 node2 节点的边
        {
          source: 'node1',
          target: 'node2',
        },
      ],
    };

    // 创建 G6 图实例
    const graph = new G6.Graph({
      container: containerRef.current!, // 指定图画布的容器 id
      // 画布宽高
      width,
      height,
      modes: {
        default: ['drag-canvas', 'drag-node'], // 允许拖拽画布、放缩画布、拖拽节点
      },
    });

    // 读取数据
    graph.data(data);
    // 渲染图
    graph.render();

    return () => {
      graph.destroy();
    };
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.graph} ref={containerRef} />
    </div>
  );
};
