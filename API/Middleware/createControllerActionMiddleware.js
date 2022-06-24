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

  const actionResult = await action(context);

  res.send(actionResult);
};

module.exports = {
  createControllerActionMiddleware,
};
