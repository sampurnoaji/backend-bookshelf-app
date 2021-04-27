const {
  saveBook,
  getAllBooks,
  getBookDetail,
  updateBook,
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
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookDetail,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBook,
  },
];

module.exports = routes;
