/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class FieldDataParam {

  public output: any;

  /**
   * fielddata
   *
   * Can the field use in-memory fielddata for sorting, aggregations, or scripting? Accepts true or false (default).
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/fielddata.html
   */
  public fieldData(value: boolean = false) {
    this.output.fielddata = value;
    return this;
  }

}