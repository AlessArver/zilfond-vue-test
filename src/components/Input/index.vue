<template>
  <input
    @input="onChange"
    @keyup="onKeyUp"
    :value="value"
    :placeholder="placeholder"
    :class="[$style.input, className]"
  />
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";

import MainLayout from "@/layouts/MainLayout/index.vue";

export default defineComponent({
  name: "UsersView",
  components: {
    MainLayout,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    onChange: {
      type: Function as PropType<(e: Event) => void>,
      required: true,
    },
    onKeyUp: {
      type: Function as PropType<(e: KeyboardEvent) => void>,
      required: true,
    },
    className: {
      type: String,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" module>
@import "./index.module.sass";
</style>
