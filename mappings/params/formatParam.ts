/**
 MIT License
 Copyright (c) 2017 Russell Lewis
 */

export class FormatParam {

  public output: any;

  /**
   fields

   In JSON documents, dates are represented as strings. Elasticsearch uses a set of preconfigured formats
   to recognize and parse these strings into a long value representing milliseconds-since-the-epoch in UTC.

   https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-date-format.html
   */
  public fields(value: string | DateFormats) {
    this.output.format = value;
    return this;
  }
}

export enum DateFormats {
  EpochMillis = 'epoch_millis',
  EpochSecond = 'epoch_second',
  DateOptionalTime = 'date_optional_time',
  StrictDateOptionalTime = 'strict_date_optional_time',
  BasicDate = 'basic_date',
  BasicDateTime = 'basic_date_time',
  BasicDateTimeNoMillis = 'basic_date_time_no_millis',
  BasicOridinalDate = 'basic_ordinal_date',
  BasicOrdinalDateTime = 'basic_ordinal_date_time',
  BasicOrdinalDateTimeNoMillis = 'basic_ordinal_date_time_no_millis',
  BasicTime = 'basic_time',
  BasicTimeNoMillis = 'basic_time_no_millis',
  BasicTTime = 'basic_t_time',
  BasicTTimeNoMillis = 'basic_t_time_no_millis',
  BasicWeekDate = 'basic_week_date',
  StringBasicWeekDate = 'strict_basic_week_date',
  BasicWeekDateTime = 'basic_week_date_time',
  StrictBasicWeekDateTime = 'strict_basic_week_date_time',
  BasicWeekDateTimeNoMillis = 'basic_week_date_time_no_millis',
  StrictBasicWeekDateTimeNoMillis = 'strict_basic_week_date_time_no_millis',
  Date = 'date',
  StrictDate = 'strict_date',
}