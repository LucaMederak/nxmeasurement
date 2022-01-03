import { IConfigHeaders } from "@interfaces/configHeaders.interfaces";

export const tokenConfig = () => {
  const accessToken = localStorage.getItem("authorization");
  const refreshToken = localStorage.getItem("x-refresh");

  const config: IConfigHeaders = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (accessToken) {
    config.headers["authorization"] = accessToken;
  }
  if (refreshToken) {
    config.headers["x-refresh"] = refreshToken;
  }

  return config;
};
