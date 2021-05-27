import { NodeModel, DefaultPortModel } from '@projectstorm/react-diagrams';
import { BaseModelOptions } from '@projectstorm/react-canvas-core';

export interface TSCustomNodeModelOptions extends BaseModelOptions {
  label?: string;
}

export class TSCustomNodeModel extends NodeModel {
  label: string;

  constructor(options: TSCustomNodeModelOptions = {}) {
    super({
      ...options,
      type: 'ts-custom-node',
    });
    this.label = options.label || 'red';

    // setup an in and out port
    this.addPort(
      new DefaultPortModel({
        in: true,
        name: 'in',
      })
    );
    this.addPort(
      new DefaultPortModel({
        in: false,
        name: 'out',
      })
    );
  }

  serialize() {
    return {
      ...super.serialize(),
      label: this.label,
    };
  }

  deserialize(event: any): void {
    super.deserialize(event);
    this.label = event.data.label;
  }
}
