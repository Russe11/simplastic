import {TextMapping, TextMappingOptions} from './textMapping';
import { KeywordMapping } from './keywordMapping';
import { LongMapping } from './longMapping';
import { IntegerMapping } from './integerMapping';
import { ShortMapping } from './shortMapping';
import { ByteMapping } from './byteMapping';
import { DoubleMapping } from './doubleMapping';
import { FloatMapping } from './floatMapping';
import { HalfFloatMapping } from './halfFloatMapping';
import { ScaledFloatMapping } from './scaledFloatMapping';
import { DateMapping } from './dateMapping';
import { BooleanMapping } from './booleanMapping';

/**
 * https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html
 */
export class SimplasticMappings {

  /**
   * text - Core datatypes
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/text.html
   */
  static text() {
    const t =  new TextMapping({type: 'hi'});


  }

  static keyword() {
    return new KeywordMapping();
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

  // binary(index = true) {
  //   return this._generateType('binary', index);
  // }
  //
  // integerRange(index = true) {
  //   return this._generateType('integer_range', index);
  // }
  //
  // floatRange(index = true) {
  //   return this._generateType('float_range', index);
  // }
  //
  // longRange(index = true) {
  //   return this._generateType('long_range', index);
  // }
  //
  // doubleRange(index = true) {
  //   return this._generateType('double_range', index);
  // }
  //
  // dateRange(index = true) {
  //   return this._generateType('date_range', index);
  // }
  //
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