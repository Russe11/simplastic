/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class NormsParam {
  public output: any;

  /**
   * Whether or not the field value should be included in the _all field? Accepts true or false. Defaults to false if
   * index is set to no, or if a parent object field sets include_in_all to false. Otherwise defaults to true.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/include-in-all.html
   */
  public norms(value: boolean = true) {
    this.output.norms = value;
    return this;
  }
}