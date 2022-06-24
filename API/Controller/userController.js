const { createUser: dbCreateUser } = require("../Service/userService");
const { hash } = require("../Helper/encryption");
const { sys_roles, sys_messages } = require("../config.json");

const createUser = async (ctx) => {
  const { userName, password, role } = ctx.params;

  // check password is only alpha numeric
  if (!(/[A-z]/.test(password) && /\d/.test(password))) {
    throw ctx.Error(402, sys_messages.error.INVALID_PASSWORD_PATTERN);
  }

  // check role is recognised by system
  if (!Object.values(sys_roles).includes(role)) {
    throw ctx.Error(402, sys_messages.error.INVALID_ROLE_REQUESTED);
  }

  await dbCreateUser({
    userName,
    password: hash(password),
    role,
  });

  return true;
};

module.exports = {
  createUser,
};
