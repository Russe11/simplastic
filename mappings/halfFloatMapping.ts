import {NumericMapping, NumericMappingOptions} from './numericMapping'

/**
 A signed 64-bit integer with a minimum value of -263 and a maximum value of 263-1.
 */
export class HalfFloatMapping extends NumericMapping {

  public output: any;
  constructor(options: NumericMappingOptions = {}) {
    options.type = options.type || 'half_float';
    super(options);
    this.output = options;
  }
}

