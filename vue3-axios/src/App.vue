<template>
  <h1>Parsing HTTP Response</h1>

  <p>News should be here</p>
  <SpaceNews></SpaceNews>
  <p>and here</p>
  <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime necessitatibus voluptates et reprehenderit consectetur autem ipsum optio, perspiciatis delectus ipsam vel eum tenetur error qui, animi at sunt aut voluptas!</p> -->
  <button @click="run1">Fetch plain text</button>
  <button @click="run2">Fetch HTML</button>
  <button @click="run3">Fetch Array</button>
  <button @click="run4">Fetch Array (numeric)</button>
  <button @click="run5">Fetch Array of object</button>
  <button @click="run6">Fetch Object</button>
  <pre id="output" v-html="textOut" />
  <div v-show="primeResponse.length > 0">
    <ul>
      <li v-for="n in primeResponse">{{ n.prime }} ({{ n.text }})</li>
    </ul>
    <p>Total is {{ primeTotal }}</p>
  </div>
  <!-- <CorsDemo/> -->
</template>

<script setup lang="ts">
import {Ref, ref} from "vue"
// import Users from "./components/RandomUsers.vue";
// import CorsDemo from "./components/CorsDemo.vue"
// export default class App extends Vue {}
import axios, { AxiosResponse } from "axios";
import SpaceNews from "./components/SpaceNews.vue";

type PrimePair = { prime: number, text:string}
const textOut = ref("")
const primeResponse: Ref<PrimePair[]> = ref([])
const primeTotal = ref(0)

function run1() {
  axios
    .request({ method: "GET", url: "http://localhost:9000" })
    .then((r: AxiosResponse) => r.data)
    .then((helloText:string) => {
      textOut.value = helloText
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
      textOut.value = `Sum of ${primeNums.length} prime numbers\n`
        + primeNums.join(" + ") + `  = ${total}`
    });
}

function run5() {
  axios
    .request({ method: "GET", url: "http://localhost:9000/arr_objects" })
    .then((r: AxiosResponse) => r.data)
    .then((primes: Array<PrimePair>) => {
      
      primeResponse.value = primes
      let total = 0
      primes.forEach((p:PrimePair) => total += p.prime)
      primeTotal.value = total
      // Auto clear after 5 seconds
      setTimeout(() => {
        primeResponse.value.splice(0)
      }, 5000)


    });
}
function run6() {
  type PrimeType = {
    description: string,
    data: Array<{prime: number, 
      text:string}>
  }
  axios
    .request({ method: "GET", url: "http://localhost:9000/object" })
    .then((r: AxiosResponse) => r.data)
    .then((remoteData: PrimeType) => {
      primeResponse.value = remoteData.data
      let total = 0
      remoteData.data.forEach((p:PrimePair) => total += p.prime)
      primeTotal.value = total
      primeResponse.value = remoteData.data
      textOut.value = remoteData.description

      // Auto clear after 5 seconds
      setTimeout(() => {
        primeResponse.value.splice(0)
        textOut.value = ""
      }, 5000)
    });
}

</script>

<style>
#output {
  width: 60%;
  white-space: pre;
  border-radius: 0.5em;
  padding: 0.5em;
  border: 1px solid blue;
}
</style>
