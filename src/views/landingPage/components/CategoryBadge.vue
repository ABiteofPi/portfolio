<script lang="ts" setup>

const props = defineProps<{
  category: string
  color: string
  textColor: string
}>()


</script>

<template>
  <div class="category" :style="{ backgroundColor: props.color }">
    <span class="category-text" :style="{ color: props.textColor }">{{ props.category }}</span>
  </div>

</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.category {
  padding: 5px 20px;
  border-radius: 5px;

  .category-text {
    font-size: 15px;
    font-weight: bold;
  }
}
</style>
