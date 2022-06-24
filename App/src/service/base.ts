import axios from "axios";

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
  return config;
});

export default axios;
