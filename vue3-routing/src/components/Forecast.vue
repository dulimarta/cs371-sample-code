<template>
    <div id="top">
    <h2>Forecast</h2>
    <router-link class="link" to="/hourly">Hourly Forecast</router-link>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos sapiente odio labore qui adipisci est maiores, nesciunt ut laboriosam atque laborum mollitia beatae nihil totam cumque excepturi eveniet. Hic?</p>

    <button @click="mayIdoHourly">Hourly Prime</button>

</div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const rt = useRouter()
function mayIdoHourly() {
    if (Math.random() < 0.5) {
        rt.push({ path: "/hourly" })
    } else {
        alert("You are not a prime member")
    }
}
</script>
<style scoped>
#top {
    height: 20vh;
    background-color: greenyellow;
    padding: 1em;
    border-radius: 1em;
}
</style>