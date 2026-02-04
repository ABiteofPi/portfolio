<script lang="ts" setup>

</script>

<template>
  <div class="d-flex flex-column">
    <div class="w-100 d-flex flex-column align-items-center title-container">
      <h1 class="font-funnel-display font-w-bold title">a bite of pi</h1>
      <h1>Design by <span class="color-yellow">Paya K.</span></h1>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '../assets/scss/main.scss';

.title-container {
  margin-top: 150px;
}

.title {
  font-size: 170px;
  background: -webkit-linear-gradient(#fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 100px rgba(255, 255, 255, 0.1);
}

.color-yellow {
  color: $yellow-500 !important;
}
</style>
