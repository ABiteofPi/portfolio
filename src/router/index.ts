import LandingPage from '@/views/landingPage/LandingPage.vue'
import DataVisualizationProj from '@/views/works/dataVisualization/DataVisualizationProj.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage,
    },
    {
      path: '/works/data-visualization-case-study',
      component: DataVisualizationProj,
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    // If the route has a hash (e.g., #about-me), scroll to it smoothly
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        // Optional: Add a top margin if your fixed navbar covers the section titles
        top: 93,
      }
    }

    // If the user uses the browser back/forward buttons, remember where they were
    if (savedPosition) {
      return savedPosition
    }

    // Otherwise, always scroll to the top of the new page
    return { top: 0 }
  },
})

export default router
