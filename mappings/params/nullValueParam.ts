/**
 MIT License
 Copyright (c) 2017 Russell Lewis
 */

export class NullValueParam {
  public output: any;

  /**
   * Accepts a string value which is substituted for any explicit null values. Defaults to null, which means the field is treated as missing.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/null-value.html
   */
  public nullValue(value: string) {
    this.output.null_value = value;
    return this;
  }
}