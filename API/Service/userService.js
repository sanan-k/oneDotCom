const { executeQuery } = require("./connectionService");

const UserQueryFileName = {
  getUser: "GetUser.sql",
  createUser: "CreateUser.sql",
};

const getUser = async (userName) => {
  const { data } = await executeQuery(UserQueryFileName.getUser, { userName });
  return data[0];
};

/**
 *
 * @param {{
 * userName: string,
 * password: string,
 * role: string
 * }} user
 */
const createUser = async (user) => {
  await executeQuery(UserQueryFileName.createUser, user);
};

module.exports = {
  createUser,
  getUser,
};
