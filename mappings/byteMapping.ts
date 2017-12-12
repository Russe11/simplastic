import {
  DocValuesParam,
  StoreParam
} from './params';

/**
 A signed 64-bit integer with a minimum value of -263 and a maximum value of 263-1.
 */
export class ByteMapping implements
  DocValuesParam,
  StoreParam {

  constructor(options?: ByteMappingOptions) {
    if (!options) {
      options = {};
    }
    options.type = options.type || 'byte';
  }

  public docValues: (value: boolean) => this;
  public store: (value?: boolean) => this;
  public output: any;
}

export interface ByteMappingOptions {
  type?: string,
  docValues?: boolean;
  store?: boolean;
}