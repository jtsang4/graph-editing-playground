import React from 'react';
import { TSCustomNodeModel } from './custom-node-model';
import { TSCustomNodeWidget } from './custom-node-widget';
import { AbstractReactFactory } from '@projectstorm/react-canvas-core';
import { DiagramEngine } from '@projectstorm/react-diagrams-core';

export class TSCustomNodeFactory extends AbstractReactFactory<TSCustomNodeModel, DiagramEngine> {
	constructor() {
		super('ts-custom-node');
	}

	generateModel(initialConfig: any) {
		return new TSCustomNodeModel();
	}

	generateReactWidget(event: any): JSX.Element {
		return <TSCustomNodeWidget engine={this.engine as DiagramEngine} node={event.model} />;
	}
}