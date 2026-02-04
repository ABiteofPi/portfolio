<script lang="ts" setup>
import Logo from "@/assets/images/logo.svg";
</script>

<template>
  <div class="px-5 py-4 z-2">
    <div class="d-flex flex-row justify-content-between align-items-center">
      <div>
        <img :src="Logo" alt="Logo" />
      </div>
      <div class="d-flex flex-row gap-4">
        <span class="navbar-link">About</span>
        <span class="navbar-link">Works</span>
        <span class="navbar-link">Contact</span>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.navbar-link {
  font-size: 20px;
}
</style>
