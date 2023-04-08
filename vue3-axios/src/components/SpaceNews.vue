<template>
    <h2>Space News Today</h2>
    <table border="1">
        <tr v-for="n in newsArticles">
            <td><a v-bind:href="n.url">{{ n.title }}</a> </td>
            <td><img v-bind:src="n.imageUrl" width="64" height="64"/></td>
        </tr>
    </table>
</template>

<script setup lang="ts">
import axios, { AxiosResponse } from "axios"
import { onMounted, ref, Ref } from 'vue';

const newsArticles: Ref<Array<SpaceArticle>> = ref([])

type SpaceArticle = {
    id: number,
    publishedAt: string,
    title: string,
    url: string,
    imageUrl: string
}
onMounted(() => {
    axios.request({method: "GET", url: "https://api.spaceflightnewsapi.net/v3/articles"})
    .then((r:AxiosResponse) => r.data)
    .then((arr: Array<SpaceArticle>) => {
        newsArticles.value = arr
    })
})
</script>