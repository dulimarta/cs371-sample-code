<template>
    <div id="top">
        
    <h2>Regional Forecast at ZipCode {{ props.zipCode }}</h2>

    <b>SHOW DEV TOOLS IN CLASS!!!</b>


    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eos sapiente odio labore qui adipisci est maiores, nesciunt ut laboriosam atque laborum mollitia beatae nihil totam cumque excepturi eveniet. Hic?</p>


</div>
</template>
<script setup lang="ts">
type ForecastDetailType = {
    zipCode: string
}

const props = defineProps<ForecastDetailType>()
</script>
<style scoped>
#top {
    height: 20vh;
    background-color: greenyellow;
    padding: 1em;
    border-radius: 1em;
}
</style>