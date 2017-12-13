import {RangeMapping, RangeMappingOptions} from './rangeMapping';

export class LongRangeMapping extends RangeMapping {

  public output: any;

  constructor(options: RangeMappingOptions = {}) {
    options.type = options.type || 'long_range';
    super(options);
    this.output = options;
  }
}

