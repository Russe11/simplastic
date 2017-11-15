/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class DocValuesParam {

  public output: any;

  /**
   * doc_values
   *
   * Should the field be stored on disk in a column-stride fashion, so that it can later be used for sorting, aggregations, or
   * scripting? Accepts true (default) or false.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/doc-values.html
   */
  public docValues(value: boolean) {
    this.output.doc_values = value;
    return this;
  }

}