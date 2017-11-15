/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class PositionIncrementGapParam {
  public output: any;

  /**
   * The number of fake term position which should be inserted between each element of an array of strings.
   * Defaults to the position_increment_gap configured on the analyzer which defaults to 100. 100 was chosen because
   * it prevents phrase queries with reasonably large slops (less than 100) from matching terms across field values.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/position-increment-gap.html
   */
  public positionIncrementGap(value: number = 100) {
    this.output.position_increment_gap = value;
    return this;
  }
}