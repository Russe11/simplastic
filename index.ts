const SimplasticMappings = require('./mappings');

class Simplastic {

  constructor(client, indexName, type) {
    this._client = client;
    this._indexName = indexName;
    this._type = type;
  }

  createIndex() {
    return this._client.indices.create({ index: this._indexName });
  }

  deleteIndex() {
    return this._client.indices.delete({ index: this._indexName });
  }

  addToIndex(body) {
    return this._client.index({
      index: this._indexName,
      type: this._type,
      id: body.id.toHexString ? body.id.toHexString() : body.id,
      body
    });
  }

  partialUpdateById(id, path, value) {
    return this._client.update({
      index: this._indexName,
      type: this._type,
      id: id.toHexString ? id.toHexString() : id,
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

  partialUpdatesById(id, data) {
    const base = {
      index: this._indexName,
      type: this._type,
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

    return this._client.update(base);
  }

  partialUpdatesByQuery(query, data) {
    const base = {
      index: this._indexName,
      type: this._type,
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

    return this._client.updateByQuery(base);
  }

  partialUpdateByQuery(query, path, value) {
    return this._client.updateByQuery({
      index: this._indexName,
      type: this._type,
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
  putMapping(properties) {
    return this._client.putMapping({
      index: this._indexName,
      type: this._type,
      body: {
        properties
      }
    });
  }

  removeById(id) {
    return this._client.delete({
      index: this._indexName,
      id: id.toHexString ? id.toHexString() : id,
    });
  }

  count() {
    return this._client.count({
      index: this._indexName
    });
  }

  mappings() {
    return SimplasticMappings();
  }

}

module.exports = Simplastic;