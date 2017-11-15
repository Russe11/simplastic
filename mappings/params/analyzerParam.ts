/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class AnalyzerParam {

  public output: any;

  /**
   * analyzer
   *
   * The analyzer which should be used for analyzed string fields, both at index-time and at search-time (unless overridden by the
   * search_analyzer). Defaults to the default index analyzer, or the standard analyzer.
   *
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/analyzer.html
   */
  public analyzer(value: string) {
    this.output.analyzer = value;
    return this;
  }
}