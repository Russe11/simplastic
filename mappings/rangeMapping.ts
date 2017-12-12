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

  public boost: (value?: number) => this;
  public coerce: (value?: boolean) => this;
  public index: (value?: boolean) => this;
  public store: (value?: boolean) => this;

  public output: any;
}