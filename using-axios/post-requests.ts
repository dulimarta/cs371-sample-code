import axios, { AxiosResponse } from "axios";
const PORT = 9000;

// POST + JSON
axios
  .request({
    method: "POST",
    url: `http://localhost:${PORT}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: { text: "Hello world as JSON", immediate: false },
  })
  .then((r: AxiosResponse) => r.data)
  .then((respData: any) => {
    console.log("What is", respData);
  });

// POST + x-www-form-urnencoded
const payload = new URLSearchParams();
payload.append("text", "Hello World url-encoded");
payload.append("immediate", false.toString());

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
    console.log("What is", respData);
  });

// POST + multipart/form-data
import FormData from "form-data";
const payload2 = new FormData();
payload2.append("text", "Hello World (multipart)");
payload2.append("immediate", false.toString());

axios
  .request({
    method: "POST",
    url: `http://localhost:${PORT}`,
    headers: payload2.getHeaders(),
    data: payload2,
  })
  .then((r: AxiosResponse) => r.data)
  .then((respData: any) => {
    console.log("What is", respData);
  });
