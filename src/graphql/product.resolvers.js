const ProductsService = require('../services/product.service');

const service = new ProductsService();

const getProduct = (_, { id }) => {
  return service.findOne(id);
};

const getProducts = () => {
  return service.find({});
};

const addProduct = (_, { dto }) => {
  return service.create(dto);
};

const updateProduct = (_, { id, dto }) => {
  return service.update(id, dto);
};

const deleteProduct = async (_, { id }) => {
  var deletedProduct = await service.delete(id);
  return deletedProduct.id;
};


const getProductsByCategory = async (_, { id }) => {
  const products = await service.find({ category: id });
  return products;
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
};
