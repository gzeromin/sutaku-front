import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignedIn: true,

  },
  mutations: {
    SET_IS_SIGNED_IN(state, value) {
      state.isSignedIn = value;
    }
  },
  actions: {
    signIn(context, payload) {
      context.commit("SET_IS_SIGNED_IN", payload);
    }
  },
  modules: {}
});
