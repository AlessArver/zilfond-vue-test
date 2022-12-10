<template>
  <div
    @click="onChoseUser"
    :class="[
      $style.userItem,
      className,
      {
        [$style.userItem_active]: isActive,
      },
    ]"
  >
    <img
      src="./assets/avatar.png"
      :alt="username"
      :class="$style.userItem__avatar"
    />
    <div :class="$style.userItem__content">
      <div :class="$style.userItem__username">
        {{ username.length > 10 ? `${username.slice(0, 15)}...` : username }}
      </div>
      <div :class="$style.userItem__email">
        {{ email.length > 10 ? `${email.slice(0, 15)}...` : email }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    onChoseUser: {
      type: Function as PropType<() => void>,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: false,
    },
    className: {
      type: Array as PropType<string[]>,
      required: false,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="sass" module>
@import "./index.module.sass"
</style>
