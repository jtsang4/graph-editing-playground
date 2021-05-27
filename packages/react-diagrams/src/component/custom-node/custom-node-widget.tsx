import React from 'react';
import { DiagramEngine, PortWidget } from '@projectstorm/react-diagrams-core';
import { TSCustomNodeModel } from './custom-node-model';

export interface TSCustomNodeWidgetProps {
  node: TSCustomNodeModel;
  engine: DiagramEngine;
}

export interface TSCustomNodeWidgetState {}

export class TSCustomNodeWidget extends React.Component<
  TSCustomNodeWidgetProps,
  TSCustomNodeWidgetState
> {
  constructor(props: TSCustomNodeWidgetProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="custom-node">
        <PortWidget
          className="circle-port-in"
          engine={this.props.engine}
          port={this.props.node.getPort('in')!}
        >
          <div className="circle-port" />
        </PortWidget>
        <PortWidget
          className="circle-port-out"
          engine={this.props.engine}
          port={this.props.node.getPort('out')!}
        >
          <div className="circle-port" />
        </PortWidget>
        <div>{this.props.node.label}</div>
      </div>
    );
  }
}
