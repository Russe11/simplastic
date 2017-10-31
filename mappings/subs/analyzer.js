class MappingSubAnalyzer {

  constructor(output) {
    this._output = output;
  }

  /**
   * The analyzer which should be used for analyzed string fields, both at index-time and at search-time (unless overridden by the
   * search_analyzer). Defaults to the default index analyzer, or the standard analyzer.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/analyzer.html
   * @param {string} value
   * @returns {MappingSubAnalyzer}
   */
  analyzer(value) {
    this._output.analyzer = value;
    return this;
  }

}

module.exports = MappingSubAnalyzer;