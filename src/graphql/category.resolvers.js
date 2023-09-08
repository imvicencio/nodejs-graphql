const CategoryService = require('../services/category.service');
const CheckRoles = require('../utils/checkRoles');
const CheckJWT = require('../utils/checkJwt');
const service = new CategoryService();

const addCategory = async (_, { dto }, context) => {
  const user = await CheckJWT(context);
  CheckRoles(user, 'admin');

  const newCategory = await service.create(dto);
  return newCategory;
};

module.exports = { addCategory };
