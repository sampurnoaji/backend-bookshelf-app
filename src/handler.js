const saveBook = require('./handler/save_book');
const getAllBooks = require('./handler/get_all_books');
const getBookDetail = require('./handler/get_book_detail');
const updateBook = require('./handler/update_book');

module.exports = {
  saveBook,
  getAllBooks,
  getBookDetail,
  updateBook,
};
