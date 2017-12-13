import {
  BoostParam,
  DocValuesParam,
  IndexParam,
  NullValueParam,
  StoreParam
} from './params';

/**
 */
export class BooleanMapping implements
  BoostParam,
  DocValuesParam,
  IndexParam,
  NullValueParam,
  StoreParam {

  constructor(options: BooleanMappingOptions = {}) {
    options.type = options.type || 'boolean';
    this.output = options;
  }

  public boost: (value?: number) => this;
  public docValues: (value: boolean) => this;
  public index: (value?: boolean) => this;
  public nullValue: (value: string) => this;
  public store: (value?: boolean) => this;

  public output: any;
}

export interface BooleanMappingOptions {
  type?: string;
  boost?: number;
  docValues?: boolean;
  index?: boolean;
  nullValue?: string;
  store?: boolean;
}