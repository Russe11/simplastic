import {
  CoerceParam,
  BoostParam,
  DocValuesParam,
  IgnoreMalformedParam,
  IndexParam,
  NullValueParam,
  StoreParam
} from './params';

/**
 */
export class NumericMapping implements
  BoostParam,
  CoerceParam,
  DocValuesParam,
  IgnoreMalformedParam,
  IndexParam,
  NullValueParam,
  StoreParam {

  constructor(options: NumericMappingOptions = {}) {
    this.output = options;
  }

  public boost: (value?: number) => this;
  public coerce: (value?: boolean) => this;
  public docValues: (value: boolean) => this;
  public ignoreMalformed: (value?: boolean) => this;
  public index: (value?: boolean) => this;
  public nullValue: (value: string) => this;
  public store: (value?: boolean) => this;

  public output: any;
}

export interface NumericMappingOptions {
  type?: string;
  boost?: number;
  coerce?: boolean;
  docValues?: boolean;
  ignoreMalformed?: boolean;
  index?: boolean;
  store?: boolean;
}