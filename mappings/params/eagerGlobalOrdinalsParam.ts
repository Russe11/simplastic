/**
MIT License
Copyright (c) 2017 Russell Lewis
*/

export class EagerGlobalOrdinalsParam {

  public output: any;

  /**
   * eager_global_ordinals
   *
   * Should global ordinals be loaded eagerly on refresh? Accepts true or false (default). Enabling this is a good idea on fields that
   * are frequently used for (significant) terms aggregations.
   * https://www.elastic.co/guide/en/elasticsearch/reference/current/fielddata.html#global-ordinals
   */
  public eagerGlobalOrdinals(value: boolean = false) {
    this.output.eager_global_ordinals = value;
    return this;
  }

}