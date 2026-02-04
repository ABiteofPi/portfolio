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
  background-image: url('../assets/images/landing-background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
