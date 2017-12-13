import {
  DocValuesParam,
  StoreParam
} from './params';

/**
 A signed 64-bit integer with a minimum value of -263 and a maximum value of 263-1.
 */
export class BinaryMapping implements
  DocValuesParam,
  StoreParam {

  constructor(options: BinaryMappingOptions = {}) {
    options.type = options.type || 'byte';
    this.output = options;
  }

  public docValues: (value: boolean) => this;
  public store: (value?: boolean) => this;
  public output: any;
}

export interface BinaryMappingOptions {
  type?: string,
  docValues?: boolean;
  store?: boolean;
}