import React from "react";
import { TOKEN_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token);

    const userResp = await fetch(url, options);
    const json = await userResp.json();

    if (userResp.ok) {
      setData(json);
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });

    const tokenResp = await fetch(url, options);
    const { token } = await tokenResp.json();

    window.localStorage.setItem("token", token);

    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, data }}>
      {children}
    </UserContext.Provider>
  );
};
