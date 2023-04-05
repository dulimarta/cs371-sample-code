<template>
  <div>
    <h1>Random Users</h1>
    <p><a href="https://randomuser.me/documentation">API documentation</a>
    </p>
    <label>Number of users</label>
    <input type="number" min="3" v-model="numUsers">
    <button @click="moreUsers">Fetch</button>
    <table v-if="userArr.length > 0">
      <tr>
        <th colspan="2"></th>
        <th>Name</th>
        <th>Email</th>
      </tr>
      <tr v-for="(u,pos) in userArr" :key="pos">
        <td>{{pos+1}}</td>
        <td><img :src="u.picture.thumbnail"></td>
        <td>{{u.name.first}} {{u.name.last}}</td>
        <td>{{u.email}}</td>
      </tr>
    </table>
  </div>
</template>
<style scoped>
input {
  margin-left: 0.5em;
}
table {
  margin-top: 8px;
}
table tr:nth-child(odd):not(:first-child) {
  background-color: hsl(30, 90%, 60%);
}
table tr:nth-child(even) {
  background-color: hsl(30, 90%, 80%);
}

table tr > td {
  padding: 0.5em;
}
</style>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import axios, { AxiosResponse } from "axios";

import { RandomUser, User } from "@/datatypes";
@Component
export default class RandomUsersComponent extends Vue {
  userArr: Array<User> = [];
  numUsers = 5;

  mounted(): void {
    this.moreUsers();
  }
  moreUsers(): void {
    axios
      .request({
        method: "GET",
        url: "https://randomuser.me/api",
        params: {
          results: this.numUsers,
        },
      })
      .then((r: AxiosResponse) => r.data)
      .then((r: RandomUser) => {
        this.userArr.splice(0);
        this.userArr.push(...r.results);
      });
  }
}
</script>