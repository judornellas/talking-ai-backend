<!--
  Example: Vue Application

  This example shows how to integrate Vercel Speed Insights
  with a Vue application.

  Add this to your src/App.vue file.
-->

<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <div id="app">
    <!-- Your application content -->
    <header>
      <h1>Talking AI</h1>
    </header>
    <main>
      <!-- Main app content -->
    </main>
    <SpeedInsights />
  </div>
</template>

<style scoped>
/* Your styles */
</style>
