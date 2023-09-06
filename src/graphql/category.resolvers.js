const boom = require('@hapi/boom');
const CategoryService = require('../services/category.service');
const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const { user } = await context.authenticate('jwt', { sesion: false });
  if (!user) {
    throw boom.unauthorized('You must login to perform this action');
  }
  const newCategory = await service.create(dto);
  return newCategory;
};

module.exports = { addCategory };
