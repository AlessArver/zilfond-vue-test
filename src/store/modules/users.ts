import { IUser, usersApi } from "@/api/user";

const state = {
  users: [] as IUser[],
  loading: null as null | boolean,
};
type StateType = typeof state;

const mutations = {
  SET_USERS(state: StateType, users: IUser[]) {
    state.users = users;
  },
  ADD_USER(state: StateType, user: IUser) {
    state.users = Array.from([...state.users, user]);
  },
  SET_LOADING(state: StateType, loading: boolean) {
    state.loading = loading;
  },
};

const actions = {
  async addUser({ commit }: any, username: string) {
    commit("SET_LOADING", true);

    let isId = false;
    let apiProps = {
      id: null as null | string,
      username: null as null | string,
    };
    if (parseInt(username)) {
      apiProps.id = username;
    } else {
      apiProps.username = username;
    }

    const newUser = await usersApi.users({ ...apiProps });
    commit("ADD_USER", newUser[0]);
    commit("SET_LOADING", false);
  },
  async getUser({ commit }: any, id: number) {
    const newUser = await usersApi.user(id);
    return newUser;
  },
};

const getters = {
  users: (state: StateType) => state.users,
  loading: (state: StateType) => state.loading,
};

export default {
  namespaced: true,
  state: () => ({ ...state }),
  mutations,
  actions,
  getters,
};
