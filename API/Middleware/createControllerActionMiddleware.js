class ControllerActionError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

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
    Error: (httpErrcode, message) =>
      new ControllerActionError(httpErrcode, message),
  };

  try {
    const actionResult = await action(context);
    res.send(actionResult);
  } catch (err) {
    if (err instanceof ControllerActionError) {
      res.status(err.code).send(err.message);
      return;
    }
    console.log(500, err);
    res.status(500).send("Server could not process your request");
  }
};

module.exports = {
  createControllerActionMiddleware,
  ControllerActionError,
};
