const {
  systemMessageParser,
  checkIsSystemMessage,
} = require("../Helper/utility");

/**
 *
 * @param {function} action
 * @returns
 */
const createControllerActionMiddleware = (action) => async (req, res) => {
  const params = {
    ...req.params,
    ...req.query,
    ...req.body,
  };

  const context = {
    params,
    auth: res.locals.auth,
  };

  try {
    const actionResult = await action(context);
    res.send(actionResult);
  } catch (err) {
    if (err.message && checkIsSystemMessage(err.message)) {
      const [code, message] = systemMessageParser(err.message);
      res.status(code).send(message);
      return;
    }
    res.status(500).send(err);
  }
};

module.exports = {
  createControllerActionMiddleware,
};
