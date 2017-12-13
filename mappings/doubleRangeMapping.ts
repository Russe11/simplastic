import {RangeMapping, RangeMappingOptions} from './rangeMapping';

export class DoubleRangeMapping extends RangeMapping {

  public output: any;

  constructor(options: RangeMappingOptions = {}) {
    options.type = options.type || 'double_range';
    super(options);
    this.output = options;
  }
}

