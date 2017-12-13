import {RangeMapping, RangeMappingOptions} from './rangeMapping';

export class FloatRangeMapping extends RangeMapping {

  public output: any;

  constructor(options: RangeMappingOptions = {}) {
    options.type = options.type || 'float_range';
    super(options);
    this.output = options;
  }
}

