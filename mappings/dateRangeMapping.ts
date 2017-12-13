import {RangeMapping, RangeMappingOptions} from './rangeMapping';
import {DateMappingOptions} from './dateMapping';

export class DateRangeMapping extends RangeMapping {

  public output: any;

  constructor(options: DateRangeMappingOptions = {}) {
    options.type = options.type || 'date_range';
    super(options);
    this.output = options;
  }
}

export interface DateRangeMappingOptions extends RangeMappingOptions, DateMappingOptions {}
