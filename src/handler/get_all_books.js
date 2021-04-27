const books = require('../books');

function filterBooksByReading(reading, h) {
  const response = h.response({
    status: 'success',
    data: {
      books: books
        .filter((it) => it.reading === reading)
        .map((it) => (
          {
            id: it.id,
            name: it.name,
            publisher: it.publisher,
          }
        )),
    },
  });
  response.code(200);
  return response;
}

function filterBooksByFinished(finished, h) {
  const response = h.response({
    status: 'success',
    data: {
      books: books
        .filter((it) => it.finished === finished)
        .map((it) => (
          {
            id: it.id,
            name: it.name,
            publisher: it.publisher,
          }
        )),
    },
  });
  response.code(200);
  return response;
}

function filterBooksByName(query, h) {
  const response = h.response({
    status: 'success',
    data: {
      books: books
        .filter((it) => it.name.toLowerCase().includes(query.toLowerCase()))
        .map((it) => (
          {
            id: it.id,
            name: it.name,
            publisher: it.publisher,
          }
        )),
    },
  });
  response.code(200);
  return response;
}

const getAllBooks = (request, h) => {
  const { reading, finished, name } = request.query;
  console.log(`reading: ${reading}`);

  if (reading === '0') {
    return filterBooksByReading(false, h);
  }
  if (reading === '1') {
    return filterBooksByReading(true, h);
  }

  if (finished === '0') {
    return filterBooksByFinished(false, h);
  }
  if (finished === '1') {
    return filterBooksByFinished(true, h);
  }

  if (name !== undefined && name !== '') {
    return filterBooksByName(name, h);
  }

  const response = h.response({
    status: 'success',
    data: {
      books: books.map((book) => (
        {
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        }
      )),
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooks;
