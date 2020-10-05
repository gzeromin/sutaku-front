<template>
  <div>
    <div id="core-view">
      <Problem v-if="funcNavi=='problem'"/>
      <Upload v-else-if="funcNavi=='upload'"/>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "CoreView",
  computed: {
    ...mapState({
      funcNavi: state => state.funcNavi
    })
  },
  components: {
    Problem: () => import("@/components/views/Problem.vue"),
    Upload: () =>  import("@/components/views/Upload.vue"),
  }
};
</script>