<script lang="ts" setup>
import dataVisThumb from '@/assets/images/thumbnails/Data visualization-thumb.jpg';
import KQHThumb from '@/assets/images/thumbnails/KQH-thumb.jpg';
import WorkCard from './WorkCard.vue';



const dataVis = {
  title: 'Chart data visualization case study',
  description: 'A UX study on best practices in displaying data from a data-dense bar chart.'
}

// const qaab = {
//   title: 'Qaab',
//   description: 'Branding for a Persian blockchain-based online marketplace.'
// }

const KQH = {
  title: 'Kipu Quantum Hub',
  description: "UI and UX improvements for Kipu Quantum GmbH's cloud-based quantum computing platform."
}
</script>

<template>
  <div class="d-flex flex-column px-5 py-5 gap-5">
    <div class="d-flex flex-row gap-4 align-items-center justify-content-between">
      <h1 class="font-w-bold">Selected Work</h1>
      <div class="line"></div>
    </div>

    <div class="work-cards-grid">
      <RouterLink to="/works/Kipu-Quantum-Hub">
        <WorkCard :title="KQH.title" :description="KQH.description" category="UI/UX" category-color="#9CC3D7"
          :thumbnail-url="KQHThumb" badge-text-color="#004162" />
      </RouterLink>

      <RouterLink to="/works/data-visualization-case-study">
        <WorkCard :title="dataVis.title" :description="dataVis.description" category="UI/UX" category-color="#9CC3D7"
          :thumbnail-url="dataVisThumb" badge-text-color="#004162" />
      </RouterLink>

      <!-- <WorkCard :title="qaab.title" :description="qaab.description" category="Branding" category-color="#9CD79C"
        :thumbnail-url="qaabThumb" badge-text-color="#006229" /> -->
    </div>
  </div>


</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.work-cards-grid {
  width: 100%;
  max-width: 1500px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-auto-rows: 1fr;
  gap: 16px;
  align-items: stretch;
}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: #151515;
}

.work-cards-grid>* {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.work-cards-grid>*> :first-child {
  flex-grow: 1;
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
