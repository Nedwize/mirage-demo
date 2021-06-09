// server.js
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    user: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/users');

    this.get('/users/:id', (schema, request) => {
      let id = request.params.id;

      return schema.users.find(id);
    });

    this.post('/users', (schema, request) => {
      let attrs = JSON.parse(request.requestBody);

      return schema.users.create(attrs);
    });

    this.patch('/users/:id', (schema, request) => {
      let newAttrs = JSON.parse(request.requestBody);
      let id = request.params.id;
      let user = schema.users.find(id);

      return user.update(newAttrs);
    });

    this.delete('/users/:id', (schema, request) => {
      let id = request.params.id;

      return schema.users.find(id).destroy();
    });
  },

  seeds(server) {
    server.create('user', {
      id: 1,
      name: 'John Doe',
      email: 'john@doe.com',
      phone: 8097804422,
    });
    server.create('user', {
      id: 2,
      name: 'Charlie Reynolds',
      email: 'creynolds@gmail.com',
      phone: 4171638042,
    });
    server.create('user', {
      id: 3,
      name: 'Jerome Kuhn',
      email: 'kuhn@hyper.com',
      phone: 6625218986,
    });
    server.create('user', {
      id: 4,
      name: 'Steph Hand',
      email: 'steph@yahoo.com',
      phone: 7599309799,
    });
  },
});
