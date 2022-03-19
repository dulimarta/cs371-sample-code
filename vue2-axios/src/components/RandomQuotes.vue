<template>
  <div>
    <h1>Random Quotes</h1>
    <p>Data source:
    <ul>
      <li>Documentation
        <a :href="quotableGitHub">Quotable API (on GitHub)</a>
      </li>
      <li><a :href="`${quotableAPI}/quotes`">API Endpoint</a></li>
    </ul>
    </p>
    <div id="inputSection">
      <label>Word to search in quotes</label>
      <input type="text" v-model="searchTerm">
      <label>Quotes per page</label>
      <input type="number" v-model="quotesLimit">
    </div>
    <div id="controls">
      <button @click="getFromPage(1)">Fetch</button>
      <button v-if="currentPage < maxPage" @click="fetchNextPage">Next
        page</button>
      <span v-if="maxPage > 1">
        Page {{currentPage}} of {{maxPage}}
      </span>
    </div>
    <table v-if="quotes.length > 0">
      <tr>
        <th>Quote</th>
        <th>Author</th>
      </tr>
      <tr v-for="(u,pos) in quotes" :key="pos">
        <td>
          <p>{{u.content}}</p>
          <span v-for="t in u.tags" :key="t">{{t}}</span>
        </td>
        <td>{{u.author}}</td>
      </tr>
    </table>

  </div>
</template>
<style scoped>
#inputSection {
  border: 1px solid black;
  border-radius: 0.5em;
  padding: 0.5em;
  margin-left: 3em;
  display: inline-grid;
  grid-template-columns: auto 10em;
}

#inputSection > input {
  margin-left: 1em;
}
#controls {
  margin-left: 3em;
  margin-top: 16px;
}
table tr:nth-child(odd):not(:first-child) {
  background-color: hsl(130, 90%, 60%);
}
table tr:nth-child(even) {
  background-color: hsl(130, 90%, 80%);
}

table tr > td {
  padding: 0.5em;
}
td > span {
  text-align: right;
  margin: 0 0.4em;
  padding: 0.25em;
  border: 1px solid black;
  border-radius: 1em;
  font-style: italic;
  font-size: 75%;
}

td > span:hover {
  background-color: white;
}
</style>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios, { AxiosResponse } from "axios";

import { Quote, QuoteIO } from "@/datatypes";
@Component
export default class RandomAnimalComponent extends Vue {
  quotes: Array<Quote> = [];
  searchTerm = "imagine";
  quotesLimit = 5;
  currentPage = 0;
  maxPage = 0;
  quotableGitHub = "https://github.com/lukePeavey/quotable";
  quotableAPI = "https://api.quotable.io";

  mounted(): void {
    // Initial page when the component is mounted
    this.getFromPage(1);
  }

  // Called when the user asks for the next page
  fetchNextPage(): void {
    this.currentPage++;
    this.getFromPage(this.currentPage);
  }

  getFromPage(startAt: number): void {
    axios
      .request({
        method: "GET",
        url: `${this.quotableAPI}/search/quotes`,
        params: {
          limit: this.quotesLimit,
          page: startAt,
          query: this.searchTerm,
          fields: "content",
        },
      })
      .then((r: AxiosResponse) => r.data)
      .then((r: QuoteIO) => {
        this.currentPage = r.page;
        this.maxPage = r.totalPages;

        this.quotes.splice(0);
        this.quotes.push(...r.results);
      });
  }
}
</script>