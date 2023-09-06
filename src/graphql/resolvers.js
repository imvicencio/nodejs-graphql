const {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('./product.resolvers');

const { login } = require('./auth.resolvers');
const { addCategory } = require('./category.resolvers');

const resolvers = {
  Query: {
    hello: () => 'hello world',
    getID: () => '123',
    getNumbers: (_, args) => args.numbers,
    product: getProduct,
    products: getProducts,
  },
  Mutation: {
    addProduct,
    updateProduct,
    deleteProduct,
    login,
    addCategory,
  },
};

module.exports = resolvers;
