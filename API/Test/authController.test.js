const jwt = require("jsonwebtoken");
const { createContext, ControllerActionError } = require("./setup");
const { sys_roles, sys_messages } = require("../config.json");
const { test_user } = require("./test.config.json");

const { login } = require("../Controller/authController");

describe("Auth Controller", () => {
  const adminUserCtx = createContext(
    test_user.admin.userName,
    test_user.admin.password
  );

  test("User should be logged in", async () => {
    const token = await login(adminUserCtx);
    expect(token).not.toBeNull();
  });

  test("JWT token should contain User-Name and role", async () => {
    const token = await login(adminUserCtx);
    const { role, userName } = jwt.decode(token);

    expect(userName).toEqual(adminUserCtx.params.userName);
    expect(role).toEqual(sys_roles.ADMIN);
  });

  test("Login should fail", async () => {
    const someUserContext = createContext("", "");
    expect(() => login(someUserContext)).toThrow(ControllerActionError);
  });
});
