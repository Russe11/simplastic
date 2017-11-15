/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class FielddataFrequencyFilterParam {

  public output: any;

  /**
   * fielddata
   *
   * Can the field use in-memory fielddata for sorting, aggregations, or scripting? Accepts true or false (default).
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/fielddata.html
   */
  public fieldDataFrequencyFilter(min: number, max: number, minSegmentSize: number) {
    this.output.fielddata_frequency_filter = {
      min,
      max,
      min_segment_size: minSegmentSize
    };
    return this;
  }
}