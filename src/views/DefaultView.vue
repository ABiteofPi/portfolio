<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import NavBar from './components/NavBar.vue';
import PageFooter from './components/PageFooter.vue';

const scrolled = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

</script>

<template>
  <div class="page">
    <NavBar :class="[{ 'navbar-scrolled': scrolled }, 'navbar']" />
    <div>
      <RouterView />
      <PageFooter />
    </div>

  </div>

</template>

<style scoped lang="scss">
.page {
  background-image: url(../assets/images/bg.svg);
  background-repeat: no-repeat;
  background-size: auto 100vh;
  background-position: top right;
  min-height: 100vh;
}

.navbar {
  top: 0;
  width: 100%;
  z-index: 10;
}

.navbar-scrolled {
  position: sticky;
  background-color: rgba(#dadada, 0.5);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 5px rgba(#151515, 0.1);
}
</style>
