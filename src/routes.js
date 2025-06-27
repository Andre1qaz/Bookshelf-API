const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return {
        status: 'success',
        message: 'Bookshelf API is running!',
        endpoints: {
          'POST /books': 'Add new book',
          'GET /books': 'Get all books',
          'GET /books/{id}': 'Get book by ID',
          'PUT /books/{id}': 'Update book',
          'DELETE /books/{id}': 'Delete book'
        }
      };
    },
  },
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;