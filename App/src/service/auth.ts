// import axios from "axios";
import axios, { parseError } from "./base";

const basePath = "/auth";

const parseJWTPayload = (token: string) => {
  const payload = token.split(".")[1];
  return JSON.parse(atob(payload));
};

export const checkSession = async () => {
  const token = localStorage.getItem("auth_token");
  if (token) {
    const { role, userName } = parseJWTPayload(token);
    return { data: { role, userName }, err: "" };
  }
};

export const login = async (userName: string, password: string) => {
  try {
    const { data } = await axios.post(basePath + "/login", {
      userName,
      password,
    });
    if (data) {
      localStorage.setItem("auth_token", data);
      const { role } = parseJWTPayload(data);

      return { data: { role, userName }, err: "" };
    }
  } catch (err) {
    return parseError(err);
  }
};

export const logout = async () => {
  try {
    const { data } = await axios.post(basePath + "/logout");
    if (data) {
      localStorage.removeItem("auth_token");
      return { data, err: "" };
    }
  } catch (err) {
    return parseError(err);
  }
};
