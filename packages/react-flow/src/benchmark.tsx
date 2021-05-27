import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import {
  DiagramMaker,
  DiagramMakerNode,
  ConnectorPlacement,
  EditorMode,
} from 'diagram-maker';
import 'diagram-maker/dist/diagramMaker.css';
import { NodeComponent } from './component/node';
import styles from './app.module.scss';

interface NodeData {
  label: string;
}

export const Benchmark: React.FC<{}> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { width, height } = containerRef.current!.getBoundingClientRect();
    const diagram = new DiagramMaker(
      containerRef.current!,
      {
        options: {
          connectorPlacement: ConnectorPlacement.TOP_BOTTOM,
        },
        renderCallbacks: {
          panels: {},
          node(node: DiagramMakerNode<NodeData>, container: HTMLElement) {
            ReactDOM.render(
              <NodeComponent label={node.consumerData!.label!} />,
              container
            );
          },
          destroy(container: HTMLElement) {
            ReactDOM.unmountComponentAtNode(container);
          },
        },
      },
      {
        initialData: {
          nodes: {
            node1: {
              id: 'node1',
              diagramMakerData: {
                position: { x: 520, y: 50 },
                size: { width: 120, height: 50 },
              },
              consumerData: { label: 'Hello' },
            },
            node2: {
              id: 'node2',
              diagramMakerData: {
                position: { x: 720, y: 260 },
                size: { width: 120, height: 50 },
              },
              consumerData: { label: 'World!' },
            },
            ...Array(498)
              .fill(1)
              .reduce((accu, curr, index) => {
                return {
                  ...accu,
                  [`node${index + 3}`]: {
                    id: `node${index + 3}`,
                    diagramMakerData: {
                      position: { x: 720 + 5 * index, y: 260 + 5 * index },
                      size: { width: 120, height: 50 },
                    },
                    consumerData: { label: 'World!' },
                  },
                };
              }, {}),
          },
          edges: {
            edge1: {
              id: 'edge1',
              src: 'node1',
              dest: 'node2',
              diagramMakerData: {},
            },
          },
          workspace: {
            position: { x: 0, y: 0 },
            scale: 1,
            canvasSize: { width, height },
            viewContainerSize: {
              width: window.innerWidth,
              height: window.innerHeight,
            },
          },
          editor: { mode: EditorMode.DRAG },
          panels: {},
        },
      }
    );

    return () => {
      diagram.destroy();
    };
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.graph} ref={containerRef} />
    </div>
  );
};
