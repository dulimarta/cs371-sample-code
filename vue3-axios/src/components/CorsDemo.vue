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
<script setup lang="ts">
import { ref } from "vue";
import axios, { AxiosResponse } from "axios";

type HerokuResponse = {
  sum: number;
  odd: boolean;
};
const a = ref(10);
const b = ref(31);
const sum = ref(0);
const imageData = ref("");

function doExpressAdd(): void {
  axios
    .request({
      method: "GET",
      url: "https://hans-express-demo.herokuapp.com/add",
      params: {
        first: a.value,
        second: b.value,
        fmt: "json",
      },
    })
    .then((r: AxiosResponse) => r.data)
    .then((x: HerokuResponse) => {
      sum.value = x.sum;
    })
    .catch((err) => {
      console.debug("Can't do it", err);
      alert(err);
    });
}

function doPostAdd(): void {
  axios
    .request({
      method: "POST",
      url: "https://hans-express-demo.herokuapp.com/add",
      headers: {
        "Content-Type": "application/json",
      },
      data: { first: a, second: b, fmt: "json" },
    })
    .then((r: AxiosResponse) => r.data)
    .then((x: HerokuResponse) => {
      sum.value = x.sum;
    })
    .catch((err) => {
      console.debug("Can't do it", err);
      alert(err);
    });
}
function doProxyAdd(): void {
  // const param = new URLSearchParams();

  // param.append("first", a.value.toString());
  // param.append("second", b.value.toString());
  // param.append("fmt", "json");
  // const actualURL =
  //   "https://hans-express-demo.herokuapp.com/add?" + param.toString();

  const actualURL =
    "https://hans-express-demo.herokuapp.com/add?" +
    `first=${a.value}&second=${b.value}&fmt=json`;

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
      sum.value = s.sum;
    })
    .catch((err) => {
      console.debug("Can't do it", err);
      alert(err);
    });
}
</script>
