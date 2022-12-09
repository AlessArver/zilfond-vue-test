<template>
  <div :class="$style.header">
    <div :class="$style.header__logo">Жилфонд</div>
    <div v-if="!!title" :class="$style.header__title">{{ title }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    return { title: props.title };
  },
});
</script>

<style lang="sass" module>
@import "./index.module.sass"
</style>
