/**
 *
 * @param {string} message
 */
const checkIsSystemMessage = (message) => {
  const sysMessagePattern = /^\[\d+\]\s.+$/;
  return sysMessagePattern.test(message);
};

/**
 *
 * @param {string} message
 * @returns
 */
const systemMessageParser = (message) => {
  if (checkIsSystemMessage(message)) {
    const [messageCodeArrStr, ...restMessage] = message.split(" ");
    return [JSON.parse(messageCodeArrStr)[0], restMessage.join(" ")];
  }
  return null;
};

module.exports = {
  checkIsSystemMessage,
  systemMessageParser,
};
