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

  public boost: (value?: number) => this;
  public coerce: (value?: boolean) => this;
  public docValues: (value: boolean) => this;
  public ignoreMalformed: (value?: boolean) => this;
  public index: (value?: boolean) => this;
  public nullValue: (value: string) => this;
  public store: (value?: boolean) => this;

  public output: any;
}