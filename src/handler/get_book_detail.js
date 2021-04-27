const books = require('../books');

const getBookDetail = (request, h) => {
  const { id } = request.params;

  const book = books.filter((it) => it.id === id)[0];

  if (book !== undefined) {
    return {
      status: 'success',
      data: {
        book,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = getBookDetail;
