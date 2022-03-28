<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <transition name="shrink-explode">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.shrink-explode-leave-active,
.shrink-explode-enter-active {
  transition-property: all;
  transition-duration: 500ms;
  transform-origin: 0 0;
}

.shrink-explode-leave {
  /* transform: scale(100%); */
}
.shrink-explode-leave-to {
  transform: scale(50%);
}
.shrink-explode-enter {
  transform: scale(50%);
}
.shrink-explode-enter-to {
  /* transform: scale(100%); */
}
</style>
