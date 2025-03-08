<!-- <script setup>
import { ref } from "vue";

// write Composition API code just like in a normal setup()
// but no need to manually return everything
const count = ref(0);
const inc = () => {
  count.value++;
};
</script> -->

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  components: {
    AppHeader,
  },
};
</script>

<template>
  <div id="app">
    <AppHeader />
    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<style>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
