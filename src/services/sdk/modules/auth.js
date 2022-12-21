import { fetch } from "../fetch.js";

export const login = async ({ username, password }) => {
  try {
    const res = await fetch({
      method: "get",
      url: "/login",
      auth: { username, password },
    });

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
