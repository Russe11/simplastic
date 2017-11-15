/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class SimilarityParam {

    public output: any;

    /**
     * What information should be stored in the index, for search and highlighting purposes. Defaults to positions.
     * https://www.elastic.co/guide/en/elasticsearch/reference/current/index-options.html
     */
    public similarityParam(value: similarityParamOptions) {
      this.output.index_options = value;
      return this;
    }

  }

  export enum similarityParamOptions {
    /**
     * The Okapi BM25 algorithm. The algorithm used by default in Elasticsearch and Lucene.
     **/
    BM25,

    /**
     * The TF/IDF algorithm which used to be the default in Elasticsearch and Lucene.
     * */
    classic,

    /**
     * A simple boolean similarity, which is used when full-text ranking is not needed and the score should
     * only be based on whether the query terms match or not. Boolean similarity gives terms a score equal to their query boost.
     * */
    boolean
  }