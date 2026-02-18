<script lang="ts" setup>
import CategoryBadge from './CategoryBadge.vue';


const props = defineProps<{
  title: string
  description: string
  category: string
  categoryColor: string
  thumbnailUrl: string
  badgeTextColor: string
}>()
</script>

<template>
  <div class="work-card d-flex flex-column justify-content-between">
    <div class="d-flex flex-column gap-3">
      <div>
        <img :src="props.thumbnailUrl" alt="thumbnail" class="thumbnail" />
      </div>
      <div class="padding-content">
        <h3 class="font-w-bold">{{ props.title }}</h3>
        <p>{{ props.description }}</p>
      </div>
    </div>

    <div class="d-flex padding-badge">
      <CategoryBadge :category="props.category" :color="props.categoryColor" :text-color="props.badgeTextColor" />
    </div>
  </div>

</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.work-card {
  cursor: pointer;
  background-color: #e3e3e3;
  border-radius: 20px;
  border: 1px solid rgba(#151515, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: scale3d(1.02, 1.02, 1);
    box-shadow: 0 4px 20px rgba(#151515, 0.1);
  }

  p {
    font-size: 20px;
  }
}

.thumbnail {
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0 0;
}

.padding-content {
  padding: 0 15px;
}

.padding-badge {
  padding: 0 15px 15px 15px;
}
</style>
