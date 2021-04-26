const {
  saveBook,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveBook,
  },
];

module.exports = routes;
