import { Node } from '@antv/x6';

class CustomNode extends Node {}

CustomNode.config({
  width: 200,
  heigh: 30,
});

Node.registry.register('custom-node', CustomNode);