import axios, { AxiosResponse } from "axios";

type RandUserResponse = {
  info: any;
  results: Array<RandomUser>;
};

type RandomUser = {
  picture: {
    thumbnail: string;
  };
  dob: {
    date: string;
    age: number;
  };
  name: {
    first: string;
    last: string;
  };
  email: string;
};
axios
  .request({
    method: "GET",
    url: "https://randomuser.me/api",
    params: { results: 5 },
  })
  .then((r: AxiosResponse) => r.data)
  .then((resp: RandUserResponse) => {
    // console.log(resp.info);.

    for (let k = 0; k < resp.results.length; k++) {
      const who = resp.results[k];

      console.log(
        `Name: ${who.name.first} ${who.name.last}, email: ${who.email}`
      );
    }
  });
