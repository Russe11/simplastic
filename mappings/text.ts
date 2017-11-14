import {
  AnalyzerParam,
  BoostParam,
  EagerGlobalOrdinalsParam,
  FieldDataParam,
  FielddataFrequencyFilterParam
} from './params';

/**
 * https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html
 */
class SimplasticTextMapping implements
  AnalyzerParam,
  BoostParam,
  EagerGlobalOrdinalsParam,
  FieldDataParam,
  FielddataFrequencyFilterParam {
  public analyzer: (value: string) => this;
  public boost: (value?: number) => this;
  public eagerGlobalOrdinals: (value?: boolean) => this;
  public fieldData: (value: boolean) => this;
  public fieldDataFrequencyFilter: (min: number, max: number, minSegmentSize: number) => this;

  public output: any;

  constructor() {

    this.boost(1);

    this.output = {
      type: 'text'
    };
  }
}

module.exports = SimplasticTextMapping;