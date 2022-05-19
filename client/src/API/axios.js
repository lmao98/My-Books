import axios from "axios";

const base_url = "http://localhost:3001";

export function makeRequest(url, method = "GET", data) {
  if (!url || url === "") {
    throw new AlertError("Error: invalid url Provided");
  }

  url = base_url + url;
  console.log(method, url);

  return axios({
    url,
    method,
    data,
  }).then(
    (res) => res.data,
    (error) => new AlertError(error)
  );
}

// export function makeSecureRequest(requestObject) {
//   // add access token
// }

export class AlertError extends Error {
  message;

  constructor(message, show = "true") {
    super(message);
    console.error(message);

    if (show) alert(message);
  }
}
