import React, { useEffect, useRef } from 'react';
import { dia, shapes } from 'jointjs';
import 'jointjs/dist/joint.css';
import { CustomNode } from './shape/node';
import styles from './app.module.scss';

export const App: React.FC<{}> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = new dia.Graph();

    const { width, height } = containerRef.current!.getBoundingClientRect();
    const paper = new dia.Paper({
      el: containerRef.current!,
      model: graph,
      width,
      height,
      gridSize: 10,
      drawGrid: true,
    } as dia.Paper.Options);

    // 这里看文档只知道可以用 shapes.dev.Model 来设置 port，但使用这个会有问题，无法不带标签地渲染上下结构的 port，现在的用法是在 stackovrflow 里找到的
    const rect = new shapes.standard.Rectangle({
      size: {
        width: 120,
        height: 50,
      },
      position: {
        x: 520,
        y: 50,
      },
      ports: {
        groups: {
          in: {
            position: { name: 'top' },
          },
          out: {
            position: { name: 'bottom' },
          },
        },
        items: [{id: '1', group: 'in'}, { id: '2', group: 'out' }]
      },
    });
    rect.attr({
      label: {
        text: 'Hello',
      },
    });
    rect.addTo(graph);

    const rect2 = rect.clone() as shapes.standard.Rectangle;
    rect2.position(720, 260);
    rect2.attr('label/text', 'World!');
    rect2.addTo(graph);

    const link = new shapes.standard.Link();
    link.source(rect);
    link.target(rect2);
    link.addTo(graph);

    return () => {
      paper.dumpViews();
    };
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.graph} ref={containerRef} />
    </div>
  );
};
