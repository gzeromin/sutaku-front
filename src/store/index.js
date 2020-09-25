import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
    signIn(context, payload) {
      context.commit("SET_IS_SIGNED_IN", payload);
    },
    backToPbl(context) {
      context.commit("SET_FUNC_NAVI","problem");
    }
  },
  modules: {}
});
