import { getToken } from "./auth.js";
const baseUrl = "http://localhost:3001/items";

function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function getItems() {
  return fetch(baseUrl)
  .then(checkResponse)
  .then(items => {
    const  owner = localStorage.getItem("userId");
    const filteredItems = items.filter(item => item.owner === owner);
    return filteredItems;
  })
}

function addItem(name, imageUrl, weather) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then(checkResponse);
}

function deleteItem(id) {
  if (owner === localStorage.getItem("userId")) {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }).then(checkResponse);
  }
}


export { getItems, addItem, deleteItem, checkResponse };
