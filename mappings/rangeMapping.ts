import {
  CoerceParam,
  BoostParam,
  IndexParam,
  StoreParam
} from './params';

/**
 */
export class RangeMapping implements
  CoerceParam,
  BoostParam,
  IndexParam,
  StoreParam {

  constructor(options: RangeMappingOptions = {}) {
    options.type = options.type || 'boolean';
    this.output = options;
  }

  public boost: (value?: number) => this;
  public coerce: (value?: boolean) => this;
  public index: (value?: boolean) => this;
  public store: (value?: boolean) => this;

  public output: any;
}

export interface RangeMappingOptions {
  type?: string;
  boost?: number;
  coerce?: boolean;
  index?: boolean;
  store?: boolean;
}