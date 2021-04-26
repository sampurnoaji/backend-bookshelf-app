const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9090,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.routes(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
