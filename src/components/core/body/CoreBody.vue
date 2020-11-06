<template>
  <div>
    <List v-if="funcNavi=='list'"/>
    <Upload v-else-if="funcNavi=='upload'"/>
    <LoginArea v-else-if="funcNavi=='login'"/>
    <Home v-else/>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "CoreView",
  computed: {
    ...mapState({
      funcNavi: state => state.funcNavi,
    })
  },
  components: {
    Home: () => import("@/components/pages/home/Home.vue"),
    List: () =>  import("@/components/pages/list/List.vue"),
    Upload: () =>  import("@/components/pages/upload/Upload.vue"),
    LoginArea: () =>  import("@/components/pages/login/LoginArea.vue"),
  }
};
</script>