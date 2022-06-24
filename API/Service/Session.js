const { token_timeout } = require("../config.json");
const SessionMap = new Map();

const createSession = (sessionId, sessionData) => {
  if (sessionId) {
    SessionMap.set(sessionId, {
      created: Date.now(),
      sessionData,
    });
    return true;
  }

  return false;
};

const clearSession = (sessionId) => {
  if (SessionMap.has(sessionId)) {
    SessionMap.delete(sessionId);
    return true;
  }

  return false;
};

const checkSession = (sessionId) => {
  const { created } = SessionMap.has(sessionId);
  if (created && Date.now() - created >= token_timeout) {
    clearSession(sessionId);
    return false;
  }
  return true;
};

const getSessionData = (sessionId) => {
  if (checkSession(sessionId)) {
    return SessionMap.get(sessionId).sessionData;
  }
  return null;
};

module.exports = {
  createSession,
  clearSession,
  checkSession,
  getSessionData,
};
