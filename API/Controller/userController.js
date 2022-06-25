const { createUser: dbCreateUser, getUser } = require("../Service/userService");
const { hash } = require("../Helper/encryption");
const { sys_roles, sys_messages } = require("../config.json");

const createUser = async (ctx) => {
  const { userName, password, role } = ctx.params;

  if (userName && userName.trim() === "") {
    throw ctx.Error(400, sys_messages.error.EMPTY_USER_NAME);
  }

  // check password is only alpha numeric
  if (!(/[A-z]/.test(password) && /\d/.test(password))) {
    throw ctx.Error(400, sys_messages.error.INVALID_PASSWORD_PATTERN);
  }

  // check role is recognised by system
  if (!Object.values(sys_roles).includes(role)) {
    throw ctx.Error(400, sys_messages.error.INVALID_ROLE_REQUESTED);
  }

  const existingUser = await getUser(userName);
  if (existingUser) {
    throw ctx.Error(403, sys_messages.error.USER_NAME_NOT_AVAILABLE);
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
