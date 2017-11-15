/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class TermVectorParam {

      public output: any;

      /**
       * What information should be stored in the index, for search and highlighting purposes. Defaults to positions.
       * https://www.elastic.co/guide/en/elasticsearch/reference/current/index-options.html
       */
      public termVectorParam(value: termVectorParamOptions.no) {
        this.output.index_options = value;
        return this;
      }

    }

    export enum termVectorParamOptions {
      /**
       * No term vectors are stored. (default)
       **/
      no = 'no',

      /**
       * Just the terms in the field are stored.
       **/
      yes = 'yes',

      /**
       * Terms and positions are stored.
       **/
      withPositions = 'with_positions',

      /**
       * Terms and character offsets are stored.
       **/
      withOffsets = 'with_offsets',

      /**
       * Terms, positions, and character offsets are stored.
       * */
      withPositionOffsets = 'with_positions_offsets'
    }