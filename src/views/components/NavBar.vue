<script lang="ts" setup>
import Logo from "@/assets/images/logo.svg";
</script>

<template>
  <div class="navbar-container">
    <div class="d-flex flex-row justify-content-between align-items-center w-100">
      <RouterLink to="/">
        <img :src="Logo" alt="Logo" class="logo" />
      </RouterLink>
      <div class="d-flex flex-row gap-4">
        <RouterLink :to="{ path: '/', hash: '#about' }">
          <span class="navbar-link">About</span>
        </RouterLink>

        <RouterLink :to="{ path: '/', hash: '#selected-work' }">
          <span class="navbar-link">Works</span>
        </RouterLink>

        <span class="navbar-link">Contact</span>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.navbar-container {
  padding: 15px 45px;

  @media (max-width: 580px) {
    padding: 10px 20px !important;
  }
}

.navbar-link {
  font-size: 20px;
}

.logo {
  transition: all 0.3s ease;

  @media (max-width: 580px) {
    width: 35px;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
