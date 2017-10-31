const Analyzer = require('./subs/analyzer');
const Boost = require('./subs/boost');

/**
 * https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html
 */
class SimplasticTextMapping extends Analyzer, Boost {

  constructor() {
    const output = {
      type: 'text'
    };

    super(output);
  }

  output() {
    return this._output;
  }


}

module.exports = SimplasticTextMapping;