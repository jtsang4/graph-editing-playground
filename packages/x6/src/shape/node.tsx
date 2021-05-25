import React from 'react';
import { Node } from '@antv/x6';
import { ReactShape } from '@antv/x6-react-shape';
import { NodeComponent } from '../component/node';

class CustomNode extends ReactShape {}

CustomNode.config({
  width: 120,
  height: 50,
  shape: 'react-shape',
  component({ node }: { node: Node }) {
    return <NodeComponent node={node} />;
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
  },
});

export { CustomNode };
