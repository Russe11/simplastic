import {IndexEntity} from './entities/indexEntity';
import * as P from 'bluebird';

export class Simplastic {

  constructor(private client, private indexName) {
  }

  public createIndex() {
    const index = new IndexEntity(this.client, this.indexName);
    return index.create();
  }

  public getIndex() {
    return P.resolve(new IndexEntity(this.client, this.indexName));
  }
}