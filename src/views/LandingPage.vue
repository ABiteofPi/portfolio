<script lang="ts" setup>


</script>

<template>
  <div class="d-flex flex-column px-5 py-5 gap-5 mt-5">
    <div>
      <h1>Design by Paya K.</h1>
      <h1 class="title font-w-bold text-muted">Visual Storytelling.</h1>
      <h1 class="title font-w-bold">Transforming technical requirements into accessible interfaces designed for humans.
      </h1>
    </div>

    <div>
      <Button class="cta-btn">View Selected Work <i-mdi-chevron-right /></Button>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '../assets/scss/main.scss';

.title {
  font-size: calc(1rem + 4vw);
}

.cta-btn {
  background-color: #151515;
  color: white;
  font-size: 1.25rem;
  padding: 15px 25px;
  border-radius: 5px;
  border-style: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #333;
    cursor: pointer;
  }

  &:active {
    background-color: #000;
  }
}
</style>
