/**
 MIT License
 Copyright (c) 2017 Russell Lewis
 */

export class NormalizerParam {

  public output: any;

  /**
   * How to pre-process the keyword prior to indexing. Defaults to null, meaning the keyword is kept as-is.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/normalizer.html
   */
  public normalizer(value: string) {
    this.output.normalizer = value;
    return this;
  }
}