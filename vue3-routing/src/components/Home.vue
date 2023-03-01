<template>
    <div id="top">
    <h2>Home</h2>

    <router-link class="link" to="/forecast">Forecast</router-link>
    <router-link class="link" to="/settings">Settings</router-link>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta tenetur laborum at dicta distinctio molestiae beatae aspernatur animi facere earum accusamus laboriosam id suscipit, sunt necessitatibus eum expedita obcaecati ut!</p>
</div>
</template>
<style scoped>
#top {
    height: 50vh;
    background-color: orange;
    padding: 1em;
    border-radius: 1em;

}
.link {
    margin: 1em;
}
</style>