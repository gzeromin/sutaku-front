<template>
  <div>
    <div v-if="pqNavi == 'problem'">
      <List v-if="funcNavi=='list'"/>
      <Upload v-else-if="funcNavi=='upload'"/>
      <Problem v-else/>
    </div>
    <div v-if="pqNavi == 'question'">Question</div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: "CoreView",
  computed: {
    ...mapState({
      pqNavi: state => state.pqNavi,
      funcNavi: state => state.funcNavi,
    })
  },
  components: {
    Problem: () => import("@/components/views/Problem.vue"),
    List: () =>  import("@/components/views/List.vue"),
    Upload: () =>  import("@/components/views/Upload.vue"),
  }
};
</script>