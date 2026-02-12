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
  height: 100vh;
}
</style>
