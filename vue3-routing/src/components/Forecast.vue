<template>
    <div id="top">
    <h2>Forecast</h2>
    <router-link class="link" to="/hourly">Hourly Forecast</router-link>
    <router-link class="link" to="/zip/49401">Allendale</router-link>
    <router-link class="link" to="/zip/60601">Chicago</router-link>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos sapiente odio labore qui adipisci est maiores, nesciunt ut laboriosam atque laborum mollitia beatae nihil totam cumque excepturi eveniet. Hic?</p>

    Your own zip: <input type="text" v-model="inputZip"><button @click="checkAtZip">Check</button>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ipsam expedita ut doloribus, dicta temporibus praesentium rerum labore tenetur facere, atque, accusamus fugit delectus dolore obcaecati consectetur iste modi ad.</p>

    <button @click="mayIdoHourly">Hourly Prime</button>

</div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import {ref} from "vue"
const inputZip = ref("12345")
const rt = useRouter()
function mayIdoHourly() {
    if (Math.random() < 0.5) {
        rt.push({ path: "/hourly" })
    } else {
        alert("You are not a prime member")
    }
}

function checkAtZip() {
    rt.push({name: "byZip", params: { zipCode: inputZip.value}})
}
</script>
<style scoped>
#top {
    height: 20vh;
    background-color: greenyellow;
    padding: 1em;
    border-radius: 1em;
}
.link {
    margin: 0 2em;
}
</style>