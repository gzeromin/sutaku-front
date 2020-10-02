import Vue from "vue";
import Vuex from "vuex";

import user from "@/store/core/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    isSignedIn: true,
    funcNavi: 'problem',
  },
  mutations: {
    SET_IS_SIGNED_IN(state, value) {
      state.isSignedIn = value;
    },
    SET_FUNC_NAVI(state, value) {
      state.funcNavi = value;
    }
  },
  actions: {
    async signIn(context, payload) {
      const res = await context.dispatch("user/getUser", payload);
      context.commit("SET_IS_SIGNED_IN", res);
    },
    backToPbl(context) {
      context.commit("SET_FUNC_NAVI","problem");
    }
  }
});
