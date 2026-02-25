<script lang="ts" setup>
</script>

<template>
  <div class="d-flex flex-column px-5 py-5 gap-5 align-items-center justify-content-center section-container">
    <div class="d-flex flex-row gap-4 align-items-center">
      <div class="line"> </div>
      <h1 class="font-w-bold">About Me</h1>
      <div class="line"> </div>
    </div>

    <div class="d-flex flex-column gap-2 bio-text">
      <p>With over 8 years of experience in the design world, I build digital products that bring data and human-centred
        design together.
      </p>
      <p>
        My journey began in freelance graphic design, creating everything from game characters, book covers, boardgames,
        and packaging, to brand visual identities, which has given me a deep intuition for aesthetics and visual
        storytelling.
      </p>
      <p>
        Today, I’m focusing on Product Design and Frontend Development.
      </p>
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.section-container {
  background-color: #d9d9d9;
  border-top: 1px solid rgba(#151515, 0.1);
  border-bottom: 1px solid rgba(#151515, 0.1);
  background-image: url(@/assets/images/logo-bg.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left;
}

.line {
  width: 120px;
  height: 1px;
  background-color: #151515;

  @media screen and (max-width: 500px) {
    width: 90px;
  }
}

.bio-text {
  max-width: 600px;

  p {
    margin: 0;
    font-size: 20px;
  }
}
</style>
