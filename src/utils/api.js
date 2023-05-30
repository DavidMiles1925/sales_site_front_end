// const baseUrl = "https://my-json-server.typicode.com/DavidMiles1925/se_project_react";
const baseUrl =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3001";

const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

function request(url, options) {
  return fetch(url, options).then(processServerResponse);
}

function getProducts() {
  return request(`${baseUrl}/products`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
}

function createProduct(data, token) {
  const { name, price, description, category, subcat1, subcat2, image } = data;
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      price,
      description,
      category,
      subcat1,
      subcat2,
      image,
    }),
  });
}

function deleteProduct(id, token) {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
}

export { request, getProducts, createProduct, deleteProduct };
