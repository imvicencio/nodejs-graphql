const boom = require('@hapi/boom');

function CheckRoles(user, ...roles) {
  if (!roles.includes(user.role)) {
    throw boom.unauthorized('your role is not allow');
  }
}

module.exports = CheckRoles;
