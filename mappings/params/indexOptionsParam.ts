/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class IndexOptionsParam {

  public output: any;

  /**
   * What information should be stored in the index, for search and highlighting purposes. Defaults to positions.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/index-options.html
   */
  public indexOptionsParam(value: indexOptionsParamOptions) {
    this.output.index_options = value;
    return this;
  }

}

export enum indexOptionsParamOptions {
  /**
   * Only the doc number is indexed. Can answer the question Does this term exist in this field?
   * */
  docs,

  /**
   * Doc number and term frequencies are indexed. Term frequencies are used to score repeated terms higher than single terms.
   * */
  freqs,

  /**
   * Doc number, term frequencies, and term positions (or order) are indexed. Positions can be used for proximity or phrase queries.
   * */
  positions,

  /**
   * Doc number, term frequencies, positions, and start and end character offsets (which map the term back to the original string) 
   * are indexed. Offsets are used by the unified highlighter to speed up highlighting.
   * */
  offsets
}