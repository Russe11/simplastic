/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class SearchQuoteAnalyzerParam {
  public output: any;

  /**
   * The analyzer that should be used at search time when a phrase is encountered. Defaults to the search_analyzer setting.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/analyzer.html#search-quote-analyzer
   */
  public searchQuoteAnalyzer(value: string) {
    this.output.search_analyzer = value;
    return this;
  }
}