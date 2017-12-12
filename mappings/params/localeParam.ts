/**
 MIT License
 Copyright (c) 2017 Russell Lewis
 */

export class LocaleParam {
  public output: any;

  /**
   * Do not index any string longer than this value. Defaults to 2147483647 so that all values would be accepted.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/ignore-above.html
   */
  public locale(value: string | LocaleParamOptions = LocaleParamOptions.Root) {
    this.output.locale = value;
    return this;
  }
}

export enum LocaleParamOptions {
  English = 'ENGLISH',
  French = 'FRENCH',
  German = 'GERMAN',
  Italian = 'ITALIAN',
  Japanese = 'JAPANESE',
  Korean = 'KOREAN',
  Chinese = 'CHINESE',
  SimplifiedChinese = 'SIMPLIFIED_CHINESE',
  TRaditionalChinese = 'TRADITIONAL_CHINESE',
  France = 'FRANCE',
  Germany = 'GERMANY',
  Italy = 'ITALY',
  Japan = 'JAPAN',
  Korea = 'KOREA',
  China = 'CHINA',
  PRC = 'PRC',
  Taiwan = 'TAIWAN',
  UK = 'UK',
  US = 'US',
  Canada = 'CANADA',
  CanadaFrench = 'CANADA_FRENCH',
  Root = 'ROOT'
}