import userService from "@/service/UserService";

export default {
  namespaced: true,
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, value) {
      state.user = value;
    }
  },
  actions: {
    getUser(context, payload) {
      var flag = true;
      if(flag) {
        console.log(payload);
        userService.getUser(payload).then(res => {
          console.log(res);
        } )
        return true;
      }
      return userService.getUser(payload).then(res => {
        if(res.data !== null) {
          context.commit("SET_USER", res.data);
          return true;
        } else {
          return false;
        }
      });
    },
    signUp(context, payload) {
      return userService.insertUser(payload).then(res => {
        console.log("user.js", res);
        if(res.data !== null) {
          return true;
        } else {
          return false;
        }
      });
    }
  }
}