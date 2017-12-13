import {NumericMapping, NumericMappingOptions} from './numericMapping'

/**
 A signed 64-bit integer with a minimum value of -263 and a maximum value of 263-1.
 */
export class ScaledFloatMapping extends NumericMapping {

  public output: any;

  constructor(options: ScaledFloatMappingOptions = {}) {
    options.type = options.type || 'integer';
    super(options);
  }

  public scalingFactor(value: number) {
    this.output.scaling_factor = value;
    return this;
  }
}

export class ScaledFloatMappingOptions implements NumericMappingOptions {
  type?: string;
  boost?: number;
  coerce?: boolean;
  docValues?: boolean;
  ignoreMalformed?: boolean;
  index?: boolean;
  store?: boolean;
  scalingFactor?: number;
}

