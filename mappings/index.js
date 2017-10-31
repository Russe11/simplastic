const TextMapping = require('./text');

/**
 * https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html
 */
class SimplasticMappings {

  /**
   * text - Core datatypes
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/text.html
   */
  text() {
    return new TextMapping();
  }

  keyword(index = true) {
    return this._generateType('keyword', index);
  }

  long(index = true) {
    return this._generateType('long', index);
  }

  integer(index = true) {
    return this._generateType('integer', index);
  }

  short(index = true) {
    return this._generateType('short', index);
  }

  byte(index = true) {
    return this._generateType('byte', index);
  }

  double(index = true) {
    return this._generateType('double', index);
  }

  float(index = true) {
    return this._generateType('float', index);
  }

  halfFloat(index = true) {
    return this._generateType('half_float', index);
  }

  scaledFloat(index = true) {
    return this._generateType('scaled_float', index);
  }

  date(index = true) {
    return this._generateType('date', index);
  }

  boolean(index = true) {
    return this._generateType('boolean', index);
  }

  binary(index = true) {
    return this._generateType('binary', index);
  }

  integerRange(index = true) {
    return this._generateType('integer_range', index);
  }

  floatRange(index = true) {
    return this._generateType('float_range', index);
  }

  longRange(index = true) {
    return this._generateType('long_range', index);
  }

  doubleRange(index = true) {
    return this._generateType('double_range', index);
  }

  dateRange(index = true) {
    return this._generateType('date_range', index);
  }

  geoPoint(index = true) {
    return this._generateType('geo_point', index);
  }

  geoShape(index = true) {
    return this._generateType('geo_shape', index)
  }

  ip() {
    return this._generateType('ip');
  }

  _generateType(type, index, fields) {
    return {
      type, index, fields
    }
  }


}

module.exports = SimplasticMappings;