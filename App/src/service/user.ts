import axios from "./base";

const basePath = "/user";
export const createUser = async (
  userName: string,
  password: string,
  role: string
) => {
  try {
    await axios.post(basePath + "/register", {
      userName,
      password,
      role,
    });
    return null;
  } catch ({ response: { data } }) {
    return data;
  }
};
