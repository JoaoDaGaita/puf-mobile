import axios from "axios";

const endpoints = {
  production: "http://api.puf.work",
  development: "http://dev.puf.work",
  production: "http://api.puf.work",
};

export const fetch = axios.create({
  baseURL:
    endpoints?.[process.env.API_ENV] ||
    process.env.CUSTOM_URL ||
    endpoints.production,
});
