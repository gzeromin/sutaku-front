import Vue from "vue";
import Vuex from "vuex";

import user from "@/store/core/user";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  state: {
    isLogin: false,
    funcNavi: 'problem',
    problem: {
      title: '참말, 거짓말',
      content: '두 갈래의 길이 두마을과 연결되어 있습니다.\n\
      한마을에는 참말만 하는 사람들이 살고 있고\n\
      다른 마을에는 거짓말만 하는 사람들이 살고있습니다.\n\
      철수는 참말만 하는 마을을 찾아가다가 중간에 갈림길에서 한사람을 만났는데,\n\
      두 마을중 한마을에 사는 것은 확실하나 어디사는지 모릅니다.\n\
      이사람에게 한가지만 질문하여 참마을로 가는 방법은?\n',
      register: 'j.min',
      regist_date:''
    },
    problems: [
      {index: 6, title: "aa", content: 'aa'},
      {index: 5, title: "bb", content: 'bbbbbbb'},
      {index: 4, title: "cc", content: 'cccc'},
      {index: 3, title: "dd", content: 'dd'},
      {index: 2, title: "ee", content: 'eeeeeee'},
      {index: 1, title: "ff", content: 'ffffffff'},
    ]
  },
  mutations: {
    SET_IS_LOGIN(state, value) {
      state.isLogin = value;
    },
    SET_FUNC_NAVI(state, value) {
      state.funcNavi = value;
    },
    SET_PROBLEMS(state, value) {
      state.problems.push(value);
    }
  },
  actions: {
    async login(context, payload) {
      const res = await context.dispatch("user/getUser", payload);
      context.commit("SET_IS_LOGIN", res);
    }
  }
});
