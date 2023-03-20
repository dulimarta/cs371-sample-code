<template>
  <h1>Parsing HTTP Response</h1>
  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime necessitatibus voluptates et reprehenderit consectetur autem ipsum optio, perspiciatis delectus ipsam vel eum tenetur error qui, animi at sunt aut voluptas!</p> -->
  <button @click="run1">Fetch plain text</button>
  <button @click="run2">Fetch HTML</button>
  <button @click="run3">Fetch Array</button>
  <button @click="run4">Fetch Array (numeric)</button>
  <button @click="run5">Fetch Object</button>
  <pre id="output" v-html="textOut" />
</template>

<script setup lang="ts">
import {ref} from "vue"
// import Users from "./components/RandomUsers.vue";
// import CorsDemo from "./components/CorsDemo.vue"
// export default class App extends Vue {}
import axios, { AxiosResponse } from "axios";

const textOut = ref("")

function run1() {
  axios
    .request({ method: "GET", url: "http://localhost:9000" })
    .then((r: AxiosResponse) => {
      textOut.value = r.data
    });
}
function run2() {
  axios
    .request({ method: "GET", url: "http://localhost:9000/markup" })
    .then((r: AxiosResponse) => {
      textOut.value = r.data
    });
}

function run3() {
  axios
    .request({ method: "GET", url: "http://localhost:9000/array" })
    .then((r: AxiosResponse) => r.data)
    .then((arr: Array<string>) => {
      textOut.value = arr.join("--")
    });
}
function run4() {
  axios
    .request({ method: "GET", url: "http://localhost:9000/primes" })
    .then((r: AxiosResponse) => r.data)
    .then((primeNums: Array<number>) => {
      let total = 0
      primeNums.forEach((p:number) => total += p)
      textOut.value = primeNums.join(" + ") + `  = ${total}`
    });
}

function run5() {
  type PrimeType = {
    description: string,
    data: Array<number>
  }
  axios
    .request({ method: "GET", url: "http://localhost:9000/object" })
    .then((r: AxiosResponse) => r.data)
    .then((remoteData: PrimeType) => {
      alert(remoteData.description)
      let total = 0
      remoteData.data.forEach((p:number) => total += p)
      textOut.value = remoteData.data.join(" + ") + `  = ${total}`
    });
}

</script>

<style>
#output {
  white-space: pre;
  border-radius: 0.5em;
  padding: 0.5em;
  border: 1px solid blue;
}
</style>
