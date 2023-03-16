import axios from "axios";

const serverUrl = "https://localhost:8080";

async function get(endpoint, params = "") {
  return axios.get(serverUrl + endpoint + params);
}

async function post(endpoint, data) {
  const bodyData = JSON.stringify(data);
  return axios.post(serverUrl + endpoint, bodyData);
}

async function put(endpoint, data) {
  const bodyData = JSON.stringify(data);
  return axios.put(serverUrl + endpoint, bodyData);
}

async function del(endpoint, params = "") {
  return axios.delete(serverUrl + endpoint + params);
}

export { get, post, put, del as delete };
