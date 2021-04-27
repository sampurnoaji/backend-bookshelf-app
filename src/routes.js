const {
  saveBook,
  getAllBooks,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: saveBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooks,
  },
];

module.exports = routes;
