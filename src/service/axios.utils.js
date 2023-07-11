import axios from "axios";

export async function postRequest(url, body) {
  return await axios.post(`${url}`, body, {
    withCredentials: "true" /*important*/,
    headers: {
      "Content-Type": "application/json",
    },
    config: {
      credentials: "include",
    },
    method: "POST",
  });
}

export async function getRequest(url) {
  return await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    config: {
      credentials: "include",
    },
    method: "GET",
  });
}


export async function putRequest(url, body) {
  return await axios.put(url, body, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    config: {
      credentials: "include",
    },

  });
}

export async function deleteRequest(url) {
  return await axios.delete(url, {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
    config: {
      credentials: "include",
    },
    method: "Delete",
  });
}
