// import axios from "axios";
import axios from "./base";

const basePath = "/auth";

export const login = async (userName: string, password: string) => {
  try {
    const { data } = await axios.post(basePath + "/login", {
      userName,
      password,
    });
    if (data) {
      localStorage.setItem("auth_token", data);
      return null;
    }
  } catch ({ response: { data } }) {
    return data;
  }
};
