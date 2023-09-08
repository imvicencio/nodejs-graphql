const boom = require('@hapi/boom');

async function CheckJWT(context) {
  const { user } = await context.authenticate('jwt', { sesion: false });
  if (!user) {
    throw boom.unauthorized('You must login to perform this action');
  }
  return user;
}

module.exports = CheckJWT;
