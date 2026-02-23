<script lang="ts" setup>
</script>

<template>
  <div class="d-flex flex-column align-items-center px-5">
    <div class="text-center py-5 mt-3 mb-3">
      <h1 class="title font-w-bold">
        Kipu Quantum Hub
      </h1>
      <h4>
        Cloud-based quantum computing platform and service marketplace
      </h4>

      <div class="mt-4">
        <h5><span class="font-w-bold">Industry:</span> Deep Tech, Quantum Computing, SaaS</h5>
        <h5>
          <span class="font-w-bold">Year:</span> 2024 - 2025
        </h5>
        <h5><span class="font-w-bold">Role:</span> UI/UX Designer, Front-end Developer</h5>
      </div>
    </div>

    <div class="d-flex flex-column gap-4 header mb-4 p-5">
      <div>
        <h2 class="font-w-bold text-muted">
          Overview
        </h2>
        <p>
          Kipu Quantum Hub is Kipu Quantum GmbH's cloud-based quantum computing platform. It provides access to a
          quantum service marketplace, quantum use cases, and a variety of tools for quantum computing including
          easy built-in access to quantum backends (Simulators, QPUs).
        </p>
        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img src="@/assets/images/KQH/001.jpg" alt="Sample chart" class="image" />
          <p class="mt-3">
            Kipu Quantum Hub marketplace page as of December 2025
          </p>
        </div>

        <p>
          During the course of this project, the platform went through 2 major stages of interface and experience
          improvements that were aligned with the transition from "PlanQK" to "PLANQK", and finally from "PLANQK" to
          "Kipu Quantum Hub".
        </p>
      </div>
    </div>

    <div class="d-flex flex-column gap-4 header mb-4 p-5">
      <div>
        <h2 class="font-w-bold text-muted">
          Challenges & Goals
        </h2>
        <p>
          Creating an easy to navigate user-friendly interface for a complex platform with a wide variety of features
          and services, while maintaining a consistent and appealing visual design that reflects the brand identity
          of Kipu Quantum GmbH, implementing new features, and accounting for future scalability.<br>
        </p>
      </div>
    </div>

    <h1 class="font-w-bold mb-4">Solution</h1>

    <div class="d-flex flex-column gap-4 header mb-4 p-5">
      <div>
        <h4 class="font-w-bold">
          Initial interface upgrade (rebranding)
        </h4>
        <p>
          The first major stage was upgrading the initial user interface to reflect Kipu Quantum's brand identity. This
          included creating a new logo, updating the color scheme and typography.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.title {
  font-size: calc(1rem + 4vw);
}

.header {
  background-color: rgba(#fff, 0.25);
  border-radius: 20px;
  backdrop-filter: blur(3px);
  border: 1px solid rgba(#666, 0.1);
  max-width: 1200px;
}

p {
  font-size: 20px;
}

li {
  font-size: 20px;
}

.image {
  padding: 5px;
  max-width: 700px;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 850px) {
    max-width: 500px;
  }

  @media (max-width: 650px) {
    max-width: 350px;
  }
}

.image-s {
  padding: 5px;
  max-height: 400px;
  max-width: 500px;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 650px) {
    max-height: 350px;
    max-width: 350px;
  }
}

.image-l {
  max-width: 600px;
  border-radius: 10px;

  @media (max-width: 650px) {

    max-width: 350px;
  }
}
</style>
