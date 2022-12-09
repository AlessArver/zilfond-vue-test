<template>
  <div :class="$style.mainLayout__wrapper">
    <Header :title="title" />
    <div :class="$style.mainLayout__card">
      <div :class="$style.mainLayout__asideWrapper">
        <div :class="$style.mainLayout__aside">
          <slot name="aside-content" />
        </div>
      </div>
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from "@/components/Header/index.vue";

export default defineComponent({
  components: {
    Header,
  },
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
