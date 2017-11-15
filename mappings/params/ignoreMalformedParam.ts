/**
 MIT License
 Copyright (c) 2017 Russell Lewis
 */

export class IgnoreMalformedParam {

  public output: any;

  /**
   If true, malformed numbers are ignored. If false (default), malformed numbers throw an exception and reject the whole document.
   https://www.elastic.co/guide/en/elasticsearch/reference/current/ignore-malformed.html
   */
  public ignoreMalformed(value: boolean = false) {
    this.output.ignore_malformed = value;
    return this;
  }

}