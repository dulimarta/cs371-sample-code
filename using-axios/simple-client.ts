import axios, { AxiosResponse } from "axios";

axios
  .request({ method: "GET", url: "http://localhost:9000/hello1" })
  .then((r: AxiosResponse) => {
    console.log(r.data);
  });
