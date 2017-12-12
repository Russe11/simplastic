import {
  BoostParam,
  DocValuesParam,
  FormatParam,
  DateFormats,
  LocaleParam,
  LocaleParamOptions,
  IgnoreMalformedParam,
  IndexParam,
  NullValueParam,
  StoreParam
} from './params';

/**
 */
export class DateMapping implements
  BoostParam,
  DocValuesParam,
  FormatParam,
  LocaleParam,
  IgnoreMalformedParam,
  IndexParam,
  NullValueParam,
  StoreParam {
  // locale(value?: string | LocaleParamOptions): this {
  //   return undefined;
  // }

  public boost: (value?: number) => this;
  public coerce: (value?: boolean) => this;
  public docValues: (value: boolean) => this;
  public fields: (value: string| DateFormats) => this;
  public ignoreMalformed: (value?: boolean) => this;
  public index: (value?: boolean) => this;
  public nullValue: (value: string) => this;
  public locale: (value?: string | LocaleParamOptions) => this;
  public store: (value?: boolean) => this;

  public output: any;
}