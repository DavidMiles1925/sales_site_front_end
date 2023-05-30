import { request } from "./api.js";

const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";

function signup(data) {
  const { name, phone, email, password } = data;

  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, phone, email, password }),
  });
}

function signin(data) {
  const { email, password } = data;
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

function checkToken(token) {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

function updateUser(data) {
  const { name, phone, address, token } = data;
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, phone, address }),
  });
}

function addToCart(_id, token) {
  return request(`${baseUrl}/users/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id }),
  });
}

function removeFromCart(_id, token) {
  return request(`${baseUrl}/users/me`, {
    method: "DELETE",
    headers: {
      "Content-Type": "Application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ _id }),
  });
}

export { signup, signin, checkToken, updateUser, addToCart, removeFromCart };
