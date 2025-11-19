const BASE_URL = "http://localhost:3000"; 

export const signup  = ( name, avatar, email, password ) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then((res) => {
      return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
    })
};

export const signin = (email, password) => {
  return fetch(`${BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

export const setToken = (token) => {
  return localStorage.setItem("token", token);
}

export const getToken = () => {
    return (localStorage.getItem("token"), { 
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
});};


export const removeToken = () => {
  return localStorage.removeItem("token");
};