/**
 A signed 64-bit integer with a minimum value of -263 and a maximum value of 263-1.
 */
import {RangeMapping, RangeMappingOptions} from './rangeMapping';

export class IntegerRangeMapping extends RangeMapping {

  public output: any;

  constructor(options: RangeMappingOptions = {}) {
    options.type = options.type || 'integer_range';
    super(options);
    this.output = options;
  }
}

