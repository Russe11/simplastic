import {
  AnalyzerParam,
  BoostParam,
  EagerGlobalOrdinalsParam,
  FieldDataParam,
  FielddataFrequencyFilterParam,
  FieldsParam,
  IndexParam,
  IndexOptionsParam,
  indexOptionsParamOptions,
  NormsParam,
  PositionIncrementGapParam,
  StoreParam,
  SearchAnalyzerParam,
  SimilarityParam,
  similarityParamOptions,
  TermVectorParam,
  termVectorParamOptions
} from './params';

/**
 * https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-types.html
 */
export class TextMapping implements

  AnalyzerParam,
  BoostParam,
  EagerGlobalOrdinalsParam,
  FieldDataParam,
  FielddataFrequencyFilterParam,
  FieldsParam,
  IndexParam,
  IndexOptionsParam,
  NormsParam,
  PositionIncrementGapParam,
  StoreParam,
  SearchAnalyzerParam,
  SimilarityParam,
  TermVectorParam {

  public analyzer: (value: string) => this;
  public boost: (value?: number) => this;
  public eagerGlobalOrdinals: (value?: boolean) => this;
  public fieldData: (value?: boolean) => this;
  public fieldDataFrequencyFilter: (min: number, max: number, minSegmentSize: number) => this;
  public fields: (value: string | string[]) => this;
  public index: (value?: boolean) => this;
  public indexOptionsParam: (value: indexOptionsParamOptions) => this;
  public norms: (value?: boolean) => this;
  public positionIncrementGap: (value?: number) => this;
  public store: (value?: boolean) => this;
  public searchAnalyzer: (value: string) => this;
  public similarityParam: (value: similarityParamOptions) => this;
  public termVectorParam: (value: termVectorParamOptions) => this;

  public output: any;

  constructor(options?: TextMappingOptions) {
    if (!options) {
      options = {};
    }
    options.type = options.type || 'text';
  }
}

export interface TextMappingOptions {
  type?: string;
  analyzer?: string;
  boost?: number;
  eagerGlobalOrdinals?: boolean;
  fieldData?: boolean;
  fieldDataFrequencyFilter?: (min: number, max: number, minSegmentSize: number) => this;
  fields?: string | string[];
  index?: boolean;
  indexOptionsParam?: indexOptionsParamOptions;
  norms?: boolean;
  positionIncrementGap?: number;
  store?: boolean;
  searchAnalyzer?: string;
  similarityParam?: similarityParamOptions;
  termVectorParam?: termVectorParamOptions;
}