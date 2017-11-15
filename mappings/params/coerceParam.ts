/**
 MIT License
 Copyright (c) 2017 Russell Lewis
 */

export class CoerceParam {

  public output: any;

  /**
   * Try to convert strings to numbers and truncate fractions for integers. Accepts true (default) and false.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/coerce.html
   */
  public coerce(value: boolean = true) {
    this.output.coerce = value;
    return this;
  }

}