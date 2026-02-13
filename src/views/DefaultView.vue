<script lang="ts" setup>
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div class="page">
    <NavBar />
    <RouterView />
  </div>

</template>

<style scoped lang="scss">
.page {
  background-image: url(../assets/images/bg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right;
  height: 100vh;
}
</style>
