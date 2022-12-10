<template>
  <MainLayout title="Home page">
    <template v-slot:aside-content>
      <RouterLink to="/users">Пользователи</RouterLink>
    </template>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MainLayout from "@/layouts/MainLayout/index.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainLayout,
  },
});
</script>
