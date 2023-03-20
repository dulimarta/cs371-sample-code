<template>
  <div>
    <h2>CORS Demo</h2>
    <p>Add two numbers</p>
    <div id="input">
      <label>First Number</label>
      <input type="number" placeholder="First number" v-model.number="a" />
      <label>Second Number</label>
      <input type="number" placeholder="Second number" v-model.number="b" />
    </div>
    <div id="buttons">
      <button @click="doExpressAdd">Add (Direct)</button>
      <button @click="doProxyAdd">Add (by Proxy)</button>
      <button @click="doPostAdd">Post Add (Direct)</button>
    </div>
    <p>Sum is {{ sum }}</p>
    <img :src="imageData" />
  </div>
</template>
<style scoped>
#input {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 0.5em;
  border: 1px solid blue;
  padding: 0.5em;
}
#buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 1em;
}
</style>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios, { AxiosResponse } from "axios";
// import { Buffer } from "buffer";

type HerokuResponse = {
  sum: number,
  odd: boolean
}
@Component
export default class CORS extends Vue {
  a = 10;
  b = 31;
  sum = 0;
  imageData = "";

  doExpressAdd(): void {
    axios
      .request({
        method: "GET",
        url: "https://hans-express-demo.herokuapp.com/add",
        params: {
          first: this.a,
          second: this.b,
          fmt: "json",
        },
      })
      .then((r: AxiosResponse) => r.data)
      .then((x: HerokuResponse) => {
        this.sum = x.sum;
      })
      .catch((err) => {
        console.debug("Can't do it", err);
        alert(err);
      });
  }

  doPostAdd(): void {
    axios
      .request({
        method: "POST",
        url: "https://hans-express-demo.herokuapp.com/add",
        headers: {
          "Content-Type": "application/json",
        },
        data: { first: this.a, second: this.b, fmt: "json" },
      })
      .then((r: AxiosResponse) => r.data)
      .then((x: HerokuResponse) => {
        this.sum = x.sum;
      })
      .catch((err) => {
        console.debug("Can't do it", err);
        alert(err);
      });
  }
  doProxyAdd(): void {
    // const param = new URLSearchParams();

    // param.append("first", this.a.toString());
    // param.append("second", this.b.toString());
    // param.append("fmt", "json");
    // const actualURL =
    //   "https://hans-express-demo.herokuapp.com/add?" + param.toString();

    const actualURL =
      "https://hans-express-demo.herokuapp.com/add?" +
      `first=${this.a}&second=${this.b}&fmt=json`;

    axios
      .request({
        method: "GET",
        url: "https://api.allorigins.win/raw",
        params: {
          url: actualURL,
        },
      })
      .then((r: AxiosResponse) => r.data)
      .then((s: HerokuResponse) => {
        this.sum = s.sum;
      })
      .catch((err) => {
        console.debug("Can't do it", err);
        alert(err);
      });
  }
}
</script>