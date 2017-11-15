/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class FieldsParam {

    public output: any;

    /**
     fields

     Multi-fields allow the same string value to be indexed in multiple ways for different purposes
     such as one field for search and a multi-field for sorting and aggregations, or the same string
     value analyzed by different analyzers.

     https://www.elastic.co/guide/en/elasticsearch/reference/current/multi-fields.html
     */
    public fields(value: string | string[]) {
        this.output.fields = value;
        return this;
    }
}