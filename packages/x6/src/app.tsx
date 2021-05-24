import React, { useEffect, useRef } from "react";
import { Graph } from "@antv/x6";
import '@antv/x6-react-shape';
import { CustomNode } from "./component/node";
import styles from "./app.module.scss";

export const App: React.FC<{}> = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const graph = new Graph({
      container: containerRef.current!,
      grid: true,
    });

    const source = graph.addNode({
      x: 120,
      y: 50,
      width: 120,
      height: 50,
      shape: "react-shape",
      component: <CustomNode />,
    });

    const target = graph.addNode({
      x: 320,
      y: 260,
      width: 120,
      height: 50,
      shape: "react-shape",
      component(node: Node) {
        return (
          <div
            style={{
              color: "#fff",
              width: "100%",
              height: "100%",
              textAlign: "center",
              lineHeight: "50px",
              borderRadius: 4,
              background: "#fff",
            }}
          >
            #fff
          </div>
        );
      },
    });

    graph.addEdge({
      source,
      target,
    });
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.graph} ref={containerRef} />
    </div>
  );
};
