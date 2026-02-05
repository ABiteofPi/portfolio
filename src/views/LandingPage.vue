<script lang="ts" setup>
import GraphicCard from './components/GraphicCard.vue';
import UiUxCard from './components/UiUxCard.vue';


</script>

<template>
  <div class="d-flex flex-column px-5">
    <div class="w-100 d-flex flex-column align-items-center title-container">
      <h1 class="font-funnel-display font-w-bold title">a bite of pi</h1>
      <h1>Design by <span class="color-yellow">Paya K.</span></h1>
    </div>
  </div>
  <div>

  </div>
  <div class="d-flex flex-column px-5 explore-container">
    <div class="w-100 d-flex flex-column align-items-center gap-4">
      <h3 class="explore-title">Explore My Work</h3>
      <div class="d-flex flex-row flex-wrap gap-4 justify-content-center">
        <UiUxCard />
        <GraphicCard />
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '../assets/scss/main.scss';

.title-container {
  margin-top: 150px;

  .title {
    font-size: 12rem;
    background: -webkit-linear-gradient(#fff, #ccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 0 100px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 0.15);
  }

  @media (max-width: 1080px) {
    margin-top: 100px;

    .title {
      font-size: 6rem;
    }
  }

  @media (max-width: 580px) {
    margin-top: 70px;

    .title {
      font-size: 4rem;
    }
  }
}

.explore-container {
  margin-top: 100px;
}

.explore-title {
  color: #999;
}

.color-yellow {
  color: $yellow-500 !important;
}
</style>
