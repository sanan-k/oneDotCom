import axios, { AxiosError } from "axios";

const No_Auth_Paths = ["/auth/login", "/user/register"];

// const baseAxios = new axios.Axios({
//   baseURL: process.env.API_BASE_URL + "/api",
// });

// baseAxios.interceptors.request.use((config) => {
//   config.headers = {
//     "Content-Type": "application/json",
//   };
//   //   console.log("Url", config.url);
//   //   if (config.url.includes("/auth")) {
//   //     const token = localStorage.getItem("auth_token");
//   //     config.headers = {
//   //       Authorization: `Bearer ${token}`,
//   //     };

//   //     return config;
//   //   }
//   return config;
// });

axios.interceptors.request.use((config) => {
  config.baseURL = process.env.API_BASE_URL + "/api";
  if (!No_Auth_Paths.includes(config.url)) {
    const token = localStorage.getItem("auth_token");
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;

export const parseError = ({
  response,
}: AxiosError): { err: string; data: null } => {
  return { err: response.data as string, data: null };
};
