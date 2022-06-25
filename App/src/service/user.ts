import axios, { parseError } from "./base";

const basePath = "/user";
export const createUser = async (
  userName: string,
  password: string,
  role: string
) => {
  try {
    const { data } = await axios.post(basePath + "/register", {
      userName,
      password,
      role,
    });
    return { data, err: "" };
  } catch (err) {
    return parseError(err);
  }
};
