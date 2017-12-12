import {
  BoostParam,
  DocValuesParam, indexOptionsParamOptions,
  IndexParam,
  NullValueParam, similarityParamOptions,
  StoreParam, termVectorParamOptions
} from './params';

/**
 */
export class BooleanMapping implements
  BoostParam,
  DocValuesParam,
  IndexParam,
  NullValueParam,
  StoreParam {

  constructor(options?: BooleanMappingOptions) {
    if (!options) {
      options = {};
    }
    options.type = options.type || 'boolean';
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