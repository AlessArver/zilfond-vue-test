<template>
  <div :class="$style.userInfo">
    <div>
      <div :class="$style.userInfo__avatarWrapper">
        <img
          src="./assets/avatar.png"
          alt=""
          :class="$style.userInfo__avatar"
        />
      </div>
    </div>
    <div :class="$style.userInfo__content">
      <div :class="$style.userInfo__name">{{ name }}</div>
      <div>
        <div :class="$style.userInfo__item">
          <span :class="$style.userInfo__item_bold">email: </span>{{ email }}
        </div>
        <div :class="$style.userInfo__item">
          <span :class="$style.userInfo__item_bold">phone: </span>{{ phone }}
        </div>
      </div>
      <div :class="$style.userInfo__aboutTitle">О себе</div>
      <p :class="$style.userInfo__aboutText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
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
