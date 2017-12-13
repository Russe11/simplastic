import {TextMapping, TextMappingOptions} from './textMapping';
import {KeywordMapping, KeywordMappingOptions} from './keywordMapping';
import {LongMapping} from './longMapping';
import {IntegerMapping} from './integerMapping';
import {ShortMapping} from './shortMapping';
import {ByteMapping} from './byteMapping';
import {DoubleMapping} from './doubleMapping';
import {FloatMapping} from './floatMapping';
import {HalfFloatMapping} from './halfFloatMapping';
import {ScaledFloatMapping} from './scaledFloatMapping';
import {DateMapping} from './dateMapping';
import {BooleanMapping} from './booleanMapping';
import {BinaryMapping} from './binaryMapping';
import {IntegerRangeMapping} from './integerRangeMapping';
import {FloatRangeMapping} from './floatRangeMapping';
import {LongRangeMapping} from './longRangeMapping';
import {DoubleRangeMapping} from './doubleRangeMapping';
import {DateRangeMapping} from './dateRangeMapping';

/**
 * https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html
 */
export class SimplasticMappings {

  /**
   * text - Core datatypes
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/text.html
   */
  static text(options: TextMappingOptions = {}) {
    return new TextMapping(options);
  }

  static keyword(options: KeywordMappingOptions = {}) {
    return new KeywordMapping(options);
  }

  static long() {
    return new LongMapping();
  }

  static integer() {
    return new IntegerMapping();
  }

  static short() {
    return new ShortMapping();
  }

  static byte() {
    return new ByteMapping();
  }

  static double() {
    return new DoubleMapping();
  }

  static float() {
    return new FloatMapping();
  }

  static halfFloat() {
    return new HalfFloatMapping();
  }

  static scaledFloat() {
    return new ScaledFloatMapping();
  }

  static date() {
    return new DateMapping();
  }

  static boolean() {
    return new BooleanMapping();
  }

  static binary() {
    return new BinaryMapping();
  }

  static integerRange() {
    return new IntegerRangeMapping();
  }

  static floatRange() {
    return new FloatRangeMapping();
  }

  static longRange() {
    return new LongRangeMapping();
  }

  static doubleRange() {
    return new DoubleRangeMapping();
  }

  static dateRange() {
    return new DateRangeMapping();
  }

  // geoPoint(index = true) {
  //   return this._generateType('geo_point', index);
  // }
  //
  // geoShape(index = true) {
  //   return this._generateType('geo_shape', index)
  // }
  //
  // ip() {
  //   return this._generateType('ip');
  // }
  //
  // _generateType(type, index, fields) {
  //   return {
  //     type, index, fields
  //   }
  // }


}