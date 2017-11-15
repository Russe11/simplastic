/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class BoostParam {

  public output: any;

  /**
   * boost
   *
   * Mapping field-level query time boosting. Accepts a floating point number, defaults to 1.0
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-boost.html
   */
  public boost(value: number = 1.0) {
    this.output.boost = value;
    return this;
  }

}