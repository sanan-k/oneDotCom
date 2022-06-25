const dotenv = require("dotenv").config({
  path: "/Users/sanketkumar/Desktop/oneDotECom/API/.env.development",
});
const {
  ControllerActionError,
} = require("../Middleware/createControllerActionMiddleware");

const context = (userName, password) => {
  return {
    params: {
      userName,
      password,
    },
    Error: (code, message) => new ControllerActionError(code, message),
  };
};

module.exports = {
  createContext: context,
  ControllerActionError,
};
