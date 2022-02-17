import axios, { AxiosResponse } from "axios";

// POST + plain text data
axios
  .request({
    method: "POST",
    url: "http://localhost:5000",
    headers: {
      "Content-Type": "text/plain",
    },
    data: "Hello world",
  })
  .then((r: AxiosResponse) => r.data)
  .then((r: any) => {
    console.log("What is", r);
  });

// POST + JSON
axios
  .request({
    method: "POST",
    url: "http://localhost:5000",
    headers: {
      "Content-Type": "application/json",
    },
    data: { text: "Hello world", immediate: false },
  })
  .then((r: AxiosResponse) => r.data)
  .then((r: any) => {
    console.log("What is", r);
  });

// POST + x-www-form-urnencoded
const payload = new URLSearchParams();
payload.append("text", "Hello World");
payload.append("immediate", false.toString());

axios
  .request({
    method: "POST",
    url: "http://localhost:5000",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: payload,
  })
  .then((r: AxiosResponse) => r.data)
  .then((r: any) => {
    console.log("What is", r);
  });

// POST + multipart/form-data
import FormData from "form-data";
const payload2 = new FormData();
payload2.append("text", "Hello World");
payload2.append("immediate", false.toString());

axios
  .request({
    method: "POST",
    url: "http://localhost:5000",
    headers: payload2.getHeaders(),
    data: payload2,
  })
  .then((r: AxiosResponse) => r.data)
  .then((r: any) => {
    console.log("What is", r);
  });
