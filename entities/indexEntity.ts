export class IndexEntity {

  constructor(public client: any, public indexName: string) { }

  public create() {
    return this.client.indeces.create({ index: this.indexName });
  }

  public delete() {
    return this.client.indices.delete({ index: this.indexName });
  }

  public add(type: string, id: string|number, body:any) {
    return this.client.index({
      index: this.indexName,
      type: type,
      id,
      body
    });
  }

  public partialUpdateById(type, id, path, value) {
    return this.client.update({
      index: this.indexName,
      type: type,
      id: id,
      body: {
        script: {
          inline: `ctx._source.${path} = params.value`,
          lang: 'painless',
          params: {
            value
          }
        }
      }
    });
  }

  public partialUpdatesById(type, id, data) {
    const base = {
      index: this.indexName,
      type: type,
      id: id,
      body: {
        script: {
          inline: '',
          lang: 'painless',
          params: { }
        }
      }
    };

    let index = 0;

    data.forEach((element) => {
      const path = element.path;
      const data = element.data;
      base.body.script.inline += `ctx._source.${path} = params.data${index};`;
      base.body.script.params[`data${index}`] = data;
      index += 1;
    });

    return this.client.update(base);
  }

  partialUpdateByQuery(type, query, path, value) {
    return this.client.updateByQuery({
      index: this.indexName,
      type: type,
      body: {
        script: {
          inline: `ctx._source.${path} = params.value`,
          lang: 'painless',
          params: {
            value
          }
        },
        query
      }
    });
  }

  partialUpdatesByQuery(type, query, data) {
    const base = {
      index: this.indexName,
      type: type,
      body: {
        query,
        script: {
          inline: '',
          lang: 'painless',
          params: { }
        }
      }
    };

    let index = 0;

    data.forEach((element) => {
      const path = element.path;
      const data = element.data;
      base.body.script.inline += `ctx._source.${path} = params.value${index};`;
      base.body.script.params[`data${index}`] = data;
      index += 1;
    });

    return this.client.updateByQuery(base);
  }

  removeById(id) {
    return this.client.delete({
      index: this.indexName,
      id: id
    });
  }

  putMapping(type, properties) {
    return this.client.putMapping({
      index: this.indexName,
      type,
      body: {
        properties
      }
    });
  }

  count() {
    return this.client.count({
      index: this.indexName
    });
  }

}