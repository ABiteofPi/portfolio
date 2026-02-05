<script lang="ts" setup>
import UiUXImg from '../../assets/images/ui-ux-img.svg';


</script>

<template>
  <div class="d-flex flex-column align-items-center work-card">
    <h2>UI/UX Design</h2>
    <img :src="UiUXImg" alt="img" />
  </div>
</template>


<style lang="scss" scoped>
.work-card {
  border-radius: 5px;
  border: 1px solid rgba(#ccc, 0.05);
  background-color: #090909;
  padding: 25px 70px 15px 70px;
  box-shadow: 0 0 15px rgba(#000, 0.25);

  transition: box-shadow 0.6s ease-in-out, border 0.4s ease-in-out;

  &:hover {
    border: 1px solid rgba(#FFC300, 0.25);
    box-shadow: 0 0 10px rgba(#FFC300, 0.07), 0 0 40px rgba(#f7d050, 0.07), 0 0 100px rgba(#ffffff, 0.07);
  }
}
</style>
