<template>
<div id="box">
  <div id="app">
    <router-view></router-view> 
    <foot></foot>
  </div>
</div>
</template>

<script>
import foot from "./components/foot.vue";
export default {
  name: "App",
  components: {
    foot
  }
};
</script>

<style lang="less">
#box {
  width: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 90%;
  margin: 0 auto;
}
</style>
