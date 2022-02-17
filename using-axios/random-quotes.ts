import axios, { AxiosResponse } from "axios";

type QuoteResponse = {
  count: number;
  results: Array<Quote>;
};

type Quote = {
  tags: Array<string>;
  content: string;
  author: string;
  length: number;
};

// Single quote
axios
  .request({
    method: "GET",
    url: "https://api.quotable.io/random",
  })
  .then((r: AxiosResponse) => r.data)
  .then((resp: Quote) => {
    console.log(`${resp.content} (${resp.author})`);
  });

// Multiple quotes
axios
  .request({
    method: "GET",
    url: "https://api.quotable.io/quotes",
    params: { limit: 10 },
  })
  .then((r: AxiosResponse) => r.data)
  .then((resp: QuoteResponse) => {
    for (let k = 0; k < resp.results.length; k++) {
      const q = resp.results[k];
      console.log(`#${k + 1}: ${q.content} (${q.author})`);
    }
  });
