<script lang="ts" setup>
import RawOutputChart from '@/assets/images/datavis/raw-output-chart.png';
</script>

<template>
  <div class="d-flex flex-column align-items-center page">
    <div class="text-center py-5 mt-3 mb-4">
      <h1 class="title font-w-bold">
        Data visualization case study
      </h1>
      <h4>
        A step by step approach to designing a user-friendly visualization for a data-dense sample chart and final
        implementation
        into a user interface.
      </h4>
    </div>

    <div class="d-flex flex-column gap-4 header mb-4">
      <div>
        <h2 class="font-w-bold text-muted">
          Problem statement
        </h2>
        <p>
          <span class="quote font-w-bold">"</span>​When a problem is posed, the outcome is represented as a probability
          distribution
          of all the
          potential bit strings (ex 00000, 00001, 00010,...) that have been evaluated, being the one with highest
          probability the selected one.
        </p>
        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img :src="RawOutputChart" alt="Sample chart" class="image" />
          <p class="mt-3">
            This is a simple example on how this information is often presented.
          </p>
        </div>
        <p>
          Most likely, in real life scenarios, those bit strings will represent the selection of a given asset on a
          portfolio optimization task (0 means not selected and 1 selected for investment) or the time in which an
          employee would need to work in a „nurse-scheduling” problem.<span class="quote font-w-bold">"</span>​
        </p>
      </div>

      <div>
        <h2 class="font-w-bold text-muted">
          Objectives
        </h2>
        <p>
          The aim is to design a more user-friendly visualization that effectively communicates the data, and Implement
          the designed visualization into a user interface while considering accessibility for colorblind
          users.
        </p>
      </div>
    </div>

    <h1 class="font-w-bold mb-4">Solution</h1>

    <div class="d-flex flex-column gap-4 header mb-5">
      <div>
        <h2 class="font-w-bold text-muted">
          Information
        </h2>
        <p>
          The first step is understanding the chart and the information it is trying to communicate.
          <br>
          Let's break it down:
        </p>
        <p>
          - We have a vertical bar chart. <br>
          - The chart legend states "VQE". <br>
          - The X-axis shows 9-bit strings meaning we have 512 samples given none are missing. <br>
          - The chart is sorted based on the sample values in ascending order (000000000, 000000001, ..., 111111111).
          <br>
          - The Y-axis represents "Quasi-probability" where one value is assigned to each sample. <br>
          - The probability values are directly associated with desirability of the sample.
        </p>
      </div>

      <div>
        <h2 class="font-w-bold text-muted">
          Identifying and addressing issues
        </h2>
        <p>
          For easier understanding, we can identify the issues with the original chart and address them one by one.
          <br>
          First we attempt to better visualize the chart itself, and then we can add more context related clues in the
          UI implementation.
        </p>
        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img :src="RawOutputChart" alt="Sample chart" class="image" />
          <p class="mt-3">
            The original chart
          </p>
        </div>

        <h4 class="font-w-bold">
          1. There's too much text and information in a small space
        </h4>
        <p>
          The original chart is very dense and has a lot of information and content in a small space. This makes it
          difficult to understand and even properly read the data.<br>
          For now, let's look at a smaller section of the overall chart to have a better view of all the different
          elements at play. This is fine, as we know not all samples are equally relevant for the end user.
        </p>

        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img src="@/assets/images/datavis/001.png" alt="Sample chart" class="image" />
          <p class="mt-3">
            A smaller sample of the original chart
          </p>
        </div>

        <h4 class="font-w-bold">
          2. Long sample names
        </h4>
        <p>
          The sample names are very long and difficult to read vertically.
          <br>
          A simple solution is to simply rotate the chart and use a horizontal bar chart instead.
        </p>

        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img src="@/assets/images/datavis/002.png" alt="Sample chart" class="image" />
          <p class="mt-3">
            Horizontal bar chart
          </p>
        </div>

        <h4 class="font-w-bold">
          3. High text density above the chart
        </h4>
        <p>
          Given the latest changes, we now have high text density above the chart, which can be overwhelming and shift
          the viewer's attention away.<br>
          To address this, we can keep the axis label "Quasi-probability" and move the value dividers to the bottom of
          the chart. This way the viewer's attention is focused on the chart itself and the values are still easily
          accessible without being overwhelming.
        </p>

        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img src="@/assets/images/datavis/003.png" alt="Sample chart" class="image" />
          <p class="mt-3">
            Horizontal bar chart with improved label and text distribution
          </p>
        </div>

        <h4 class="font-w-bold">
          4. Confusing chart sorting
        </h4>
        <p>
          Given we know the most desirable sample is the one with the highest probability, and that the sample names
          represent something other than the actual numeric value they display, it makes more sense to sort the chart
          based on the probability value in descending order.<br>
          This way, the most relevant sample is displayed on top, and the chart is sorted based on desirability.
        </p>

        <div class="d-flex flex-column flex-md-row gap-2">
          <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
            <img src="@/assets/images/datavis/004.png" alt="Sample chart" class="image-s" />
            <p class="mt-3">
              Chart sorted based on desirability (probability)
            </p>
          </div>
          <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
            <img src="@/assets/images/datavis/005.png" alt="Sample chart" class="image-s" />
            <p class="mt-3">
              How the chart would look given negative probability values.
            </p>
          </div>
        </div>

        <h4 class="font-w-bold">
          5. Creating a wireframe
        </h4>
        <p>
          We can now create a low fidelity wireframe to visualize the chart in an interface.
          <br>
          We highlight the highest probability sample (most relevant) by giving the bar a differnt color and making the
          text stand out.
        </p>

        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img src="@/assets/images/datavis/006.png" alt="Sample chart" class="image-s" />
          <p class="mt-3">
            First wireframe
          </p>
        </div>

        <h4 class="font-w-bold">
          6. Considering full sample size
        </h4>
        <p>
          Since samples with low probability are not very relevant for the user, we can simply display a small number of
          samples at a time, defaulting to the top values. The user can scroll throught the sample list if necessary.
          <br>
          We also add position indicators, so the user won't get lost when scrolling.
        </p>

        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img src="@/assets/images/datavis/007.png" alt="Sample chart" class="image-s" />
          <p class="mt-3">
            Final wireframe
          </p>
        </div>
      </div>
    </div>

    <h1 class="font-w-bold mb-4">Finalized UI</h1>

    <div class="d-flex flex-column gap-4 header mb-4">
      <div>


        <p>
          We can finalize the user interface, implementing the improved chart and adding more information to facilitate
          the user.<br>
          For instance, we can add the total sample count and the most desirable sample information on top, so the user
          has easy access to it at all times, even if they have scrolled down in the list.<br>
          Additionally, we can add a filtering logic and a search bar, so the user can access specific samples or
          probability intervals more easily. <br>
          The sample names could also display additional context related information on hover or if clicked.
        </p>
        <div class="d-flex flex-column flex-md-row gap-2">
          <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
            <img src="@/assets/images/datavis/008.png" alt="Sample chart" class="image-s" />
            <p class="mt-3">
              Final UI in light mode
            </p>
          </div>
          <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
            <img src="@/assets/images/datavis/009.png" alt="Sample chart" class="image-s" />
            <p class="mt-3">
              Final UI in dark mode
            </p>
          </div>
        </div>

        <h4 class="font-w-bold">
          Facilitating users with color blindness
        </h4>
        <p>
          The final design uses a blue and gray color palette, which is generally considered to be more accessible for
          users with color blindness. Additionally, there's enough contrast between different colors and elements making
          them easily distinguishable for users with different colorblindness conditions, namely Protanopia,
          Deuteranopia, Tritanopia, and Achromatopsia.
        </p>

        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img src="@/assets/images/datavis/010.png" alt="Sample chart" class="image-l" />
          <p class="mt-3">
            How users with colorblindness would see the UI (Light mode)
          </p>
        </div>
        <div class="d-flex flex-column w-100 align-items-center mt-4 mb-3">
          <img src="@/assets/images/datavis/011.png" alt="Sample chart" class="image-l" />
          <p class="mt-3">
            How users with colorblindness would see the UI (Dark mode)
          </p>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
@import '@/assets/scss/main.scss';

.page {
  padding: 30px;

  @media (max-width: 650px) {
    padding: 15px;
  }
}

.title {
  font-size: calc(1rem + 4vw);
}

.quote {
  font-size: 30px;
  color: #666;
}

.header {
  background-color: rgba(#fff, 0.25);
  border-radius: 20px;
  backdrop-filter: blur(3px);
  border: 1px solid rgba(#666, 0.1);
  max-width: 1200px;
  padding: 30px;

  @media (max-width: 650px) {
    padding: 20px;
  }
}

p {
  font-size: 20px;
}

li {
  font-size: 20px;
}

.image {
  padding: 15px;
  max-width: 500px;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: 650px) {
    max-width: 350px;
  }
}

.image-s {
  padding: 15px;
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
