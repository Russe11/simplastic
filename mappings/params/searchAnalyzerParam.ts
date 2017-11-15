/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class SearchAnalyzerParam {
  public output: any;

  /**
   * The analyzer that should be used at search time on analyzed fields. Defaults to the analyzer setting.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/search-analyzer.html
   */
  public searchAnalyzer(value: string) {
    this.output.search_analyzer = value;
    return this;
  }
}