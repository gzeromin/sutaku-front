<template>
  <div>
    <div class="navi">
      <div 
        class="navi-home"
        id="home"
        :class="[funcNavi == 'home' ? 'selected':'']"
        @click="switchView('home')"
      >home</div>
      <div
        v-if="isLogin" 
        class="navi-menu"
        id="logout"
        @click="logout()"
      >logout</div>
      <div
        v-else
        class="navi-menu"
        id="login"
        :class="[funcNavi == 'login' ? 'selected':'']"
        @click="switchView('login')"
      >login</div>
      <div 
        class="navi-menu"
        id="list"
        :class="[funcNavi == 'list' ? 'selected':'']"
        @click="switchView('list')"
      >list</div>
      <div 
        class="navi-menu"
        id="upload"
        :class="[funcNavi == 'upload' ? 'selected':'']"
        @click="switchView('upload')"
      >upload</div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: 'CoreHeader',
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Upload', icon: 'fas fa-pen-square', path: "upload" },
        { title: 'Incorrect Note', icon: 'fas fa-book-open', path: "incrrNote" },
        { title: 'Questions', icon: 'far fa-question-circle', path: "questions" },
        { title: 'Answers & Solutions', icon: 'fas fa-archive', path: "ansNSol" },
      ],
      mini: false,
    }
  },
  methods: {
    logout() {
      this.SET_IS_LOGIN(false);
      this.$emit("signOut");
    },
    switchView(path) {
      this.SET_FUNC_NAVI(path);
    },
    ...mapMutations(['SET_IS_LOGIN', 'SET_FUNC_NAVI'])
  },
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      funcNavi: state => state.funcNavi
    })
  }
}
</script>