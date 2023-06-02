import { request } from "./api";

const { REACT_APP_CHUCK_NORRIS_KEY = "not_a_key" } = process.env;

function getJoke() {
  return request("https://api.api-ninjas.com/v1/chucknorris?", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": REACT_APP_CHUCK_NORRIS_KEY,
    },
  });
}

export { getJoke };
