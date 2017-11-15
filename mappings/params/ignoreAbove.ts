/**
 MIT License
 Copyright (c) 2017 Russell Lewis
 */

export class IgnoreAboveParam {
  public output: any;

  /**
   * Do not index any string longer than this value. Defaults to 2147483647 so that all values would be accepted.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/ignore-above.html
   */
  public ignoreAbove(value: number = 2147483647) {
    this.output.ignore_above = value;
    return this;
  }
}