<template>
  <MainLayout title="Пользователь">
    <template v-slot:aside-content>
      <div :class="$style.usersView__asideContainer">
        <div :class="$style.usersView__asideTitle">Поиск сотрудников</div>
        <Input
          :value="state.inputValue"
          placeholder="Введите id или username"
          :on-change="onChangeInput"
          :on-key-up="onKeyUpInput"
          :className="$style.usersView__asideInput"
        />
        <div :class="$style.usersView__asideTitle">Результаты</div>
      </div>
      <div :class="[$style.usersView__users, $style.usersView__asideContainer]">
        <UserItem
          v-if="users.length"
          v-for="u in users"
          :key="u.id"
          :onChoseUser="onChoseUser(u.id)"
          :username="u.username"
          :email="u.email"
          :className="[$style.usersView__user]"
          :isActive="u.id === state.chosenUser"
        />
        <div v-else>
          <Loader v-if="loading !== null && loading" />
          <span
            v-else-if="loading === null || !loading"
            :class="$style.usersView__asideNotFound"
          >
            ничего не найдено
          </span>
        </div>
      </div>
    </template>
    <template v-slot:content>
      <UserInfo
        v-if="state.user"
        :name="state.user.name"
        :email="state.user.email"
        :phone="state.user.phone"
      />
      <div v-else :class="$style.usersView__noUser">
        <Loader v-if="state.userLoading !== null && state.userLoading" />
        <span v-else-if="state.userLoading === null || !state.userLoading">
          Выберите сотрудника, чтобы посмотреть его профиль
        </span>
      </div>
    </template>
  </MainLayout>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";

import MainLayout from "@/layouts/MainLayout/index.vue";
import Input from "@/components/Input/index.vue";
import Loader from "@/components/Loader/index.vue";
import UserItem from "@/components/pages/users/UserItem/index.vue";
import UserInfo from "@/components/pages/users/UserInfo/index.vue";
import { IUser } from "@/api/user";

export default defineComponent({
  name: "UsersView",
  components: {
    MainLayout,
    Input,
    UserItem,
    UserInfo,
    Loader,
  },
  setup() {
    const store = useStore();
    const state = reactive({
      inputValue: "",
      chosenUser: null as number | null,
      user: null as null | IUser,
      userLoading: null as null | boolean,
    });
    const users = computed(() => store.getters["users/users"]);
    const loading = computed(() => store.getters["users/loading"]);

    const onGetUsers = () => {
      const namesOfUsers = state.inputValue.split(",").map((i) => i.trim());

      if (users.value.length) {
        store.commit("users/SET_USERS", []);
      }

      namesOfUsers.map((n) => {
        store.dispatch("users/addUser", n);
      });
    };

    const onChangeInput = (e: any) => {
      state.inputValue = e.target.value;
    };

    const onKeyUpInput = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        onGetUsers();
      }
    };

    const handleSetUser = async (id: number) => {
      state.userLoading = true;
      state.user = await store.dispatch("users/getUser", id);
      state.userLoading = false;
    };

    const onChoseUser = (id: number) => () => {
      state.chosenUser = id;
      handleSetUser(id);
    };

    return {
      state,
      users,
      loading,
      onChangeInput,
      onKeyUpInput,
      onChoseUser,
    };
  },
});
</script>

<style lang="scss" module>
@import "@/styles/views/users.module.sass";
</style>
