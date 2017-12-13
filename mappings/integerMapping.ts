import {NumericMapping, NumericMappingOptions} from './numericMapping'

/**
 A signed 64-bit integer with a minimum value of -263 and a maximum value of 263-1.
 */
export class IntegerMapping extends NumericMapping {
  
  public output: any;

  constructor(options: NumericMappingOptions = {}) {
    options.type = options.type || 'integer';
    super(options);
    this.output = options;
  }
}

