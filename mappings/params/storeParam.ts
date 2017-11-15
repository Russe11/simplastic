/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class StoreParam {
  public output: any;

  /**
   * Whether the field value should be stored and retrievable separately from the _source field. Accepts true or false (default).
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-store.html
   */
  public store(value: boolean = false) {
    this.output.store = value;
    return this;
  }
}