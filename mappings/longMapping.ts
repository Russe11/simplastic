import { NumericMapping } from './numericMapping'

/**
 A signed 64-bit integer with a minimum value of -263 and a maximum value of 263-1.
 */
export class LongMapping extends NumericMapping {

  public output: any;

  constructor() {
    super();
    this.output = {
      type: 'long'
    };
  }
}

