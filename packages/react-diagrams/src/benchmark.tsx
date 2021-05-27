import React from 'react';
import createEngine, {
  DefaultLinkModel,
  DiagramModel,
} from '@projectstorm/react-diagrams';
import { CanvasWidget } from '@projectstorm/react-canvas-core';
import { TSCustomNodeFactory } from './component/custom-node/custom-node-factory';
import { TSCustomNodeModel } from './component/custom-node/custom-node-model';
import styles from './app.module.scss';

// create an instance of the engine
const engine = createEngine();

// register the two engines
engine.getNodeFactories().registerFactory(new TSCustomNodeFactory());

// create a diagram model
const model = new DiagramModel();

// now create two nodes of each type, and connect them
const node1 = new TSCustomNodeModel({ label: 'Hello' });
node1.setPosition(520, 50);

const node2 = new TSCustomNodeModel({ label: 'World!' });
node2.setPosition(720, 260);

const link1 = new DefaultLinkModel();
link1.setSourcePort(node1.getPort('out')!);
link1.setTargetPort(node2.getPort('in')!);

model.addAll(node1, node2, link1);

const nodes = Array(498).fill(1).map((item, index) => {
  const node = new TSCustomNodeModel({ label: 'World!' });
  node.setPosition(720 + 5 * index, 260 + 5 * index);
  return node;
});
model.addAll(...nodes);

// install the model into the engine
engine.setModel(model);

export const Benchmark: React.FC<{}> = () => {
  return (
    <div className={styles.app}>
      <CanvasWidget className={styles.graph} engine={engine} />
    </div>
  );
};
