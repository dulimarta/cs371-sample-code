import axios, { AxiosResponse } from "axios";
const PORT = 9000;

const classDays = ["Mon", "Wed", "Fri"];
// POST + JSON
axios
  .request({
    method: "POST",
    url: `http://localhost:${PORT}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      text: "Hello world as JSON",
      immediate: false,
      days: classDays,
    },
  })
  .then((r: AxiosResponse) => r.data)
  .then((respData: any) => {
    console.log("Response of JSON request", respData);
  });

// POST + x-www-form-urlencoded
const payload = new URLSearchParams();
payload.append("text", "Hello World url-encoded");
payload.append("immediate", false.toString());
for (let d of classDays) {
  payload.append("days[]", d);
}
axios
  .request({
    method: "POST",
    url: `http://localhost:${PORT}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: payload,
  })
  .then((r: AxiosResponse) => r.data)
  .then((respData: any) => {
    console.log("Response of URL encoded request", respData);
  });

// POST + multipart/form-data
import FormData from "form-data";
const fd = new FormData();
fd.append("text", "Hello World (multipart)");
fd.append("immediate", false.toString());
for (let d of classDays) {
  fd.append("days[]", d);
}

axios
  .request({
    method: "POST",
    url: `http://localhost:${PORT}`,
    headers: fd.getHeaders(),
    data: fd,
  })
  .then((r: AxiosResponse) => r.data)
  .then((respData: any) => {
    console.log("Response of multipart request", respData);
  });
