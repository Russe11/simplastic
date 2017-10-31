class MappingSubBoost {

  constructor(output) {
    this._output = output;
  }

  /**
   * Mapping field-level query time boosting. Accepts a floating point number, defaults to 1.0
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-boost.html
   * @param {number} value
   * @returns {MappingSubBoost}
   */
  boost(value) {
    this._output.boost = value;
    return this;
  }

}

module.exports = MappingSubBoost;