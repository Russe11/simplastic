import {
  BoostParam,
  EagerGlobalOrdinalsParam,
  FieldDataParam,
  FieldsParam,
  IgnoreAboveParam,
  IndexParam,
  IndexOptionsParam, indexOptionsParamOptions,
  NormsParam,
  NullValueParam,
  StoreParam,
  SimilarityParam, similarityParamOptions,
  NormalizerParam
} from './params';

/**
 A field to index structured content such as email addresses, hostnames, status codes, zip codes or tags.

 They are typically used for filtering (Find me all blog posts where status is published), for sorting, and for aggregations. Keyword fields are only searchable by their exact value.

 If you need to index full text content such as email bodies or product descriptions, it is likely that you should rather use a text field.

 https://www.elastic.co/guide/en/elasticsearch/reference/current/keyword.html
 */
export class KeywordMapping implements

  BoostParam,
  EagerGlobalOrdinalsParam,
  FieldDataParam,
  FieldsParam,
  IgnoreAboveParam,
  IndexParam,
  IndexOptionsParam,
  NormsParam,
  NullValueParam,
  StoreParam,
  SimilarityParam,
  NormalizerParam {

  public boost: (value?: number) => this;
  public eagerGlobalOrdinals: (value?: boolean) => this;
  public fieldData: (value?: boolean) => this;
  public fieldDataFrequencyFilter: (min: number, max: number, minSegmentSize: number) => this;
  public fields: (value: string | string[]) => this;
  public ignoreAbove: (value?: number) => this;
  public index: (value?: boolean) => this;
  public indexOptionsParam: (value: indexOptionsParamOptions) => this;
  public normalizer: (value: string) => this;
  public norms: (value?: boolean) => this;
  public nullValue: (value: string) => this;
  public positionIncrementGap: (value?: number) => this;
  public store: (value?: boolean) => this;
  public searchAnalyzer: (value: string) => this;
  public similarityParam: (value: similarityParamOptions) => this;

  public output: KeywordMappingOptions;

  constructor(options: KeywordMappingOptions = {}) {
    options.type = options.type || 'keyword';
    this.output = options;
  }

}

export interface KeywordMappingOptions {
  type?: string;
  boost?: number;
  eagerGlobalOrdinals?: boolean;
  fieldData?: boolean;
  fieldDataFrequencyFilter?: (min: number, max: number, minSegmentSize: number) => this;
  fields?: string | string[];
  ignoreAbove?: number;
  index?: boolean;
  indexOptionsParam?: indexOptionsParamOptions;
  normalizer?: string;
  norms?: boolean;
  nullValue?: string;
  positionIncrementGap?: number;
  store?:boolean;
  searchAnalyzer?: string;
  similarityParam?: similarityParamOptions;
}