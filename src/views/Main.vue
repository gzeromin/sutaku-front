<template>
  <div>
    <core-header id="core-header"/>
    <core-navi id="core-navi"/>
    <core-body id="core-body"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Main",
  data: ()=> ({
  }),
  method: {
  },
  computed: {
    ...mapState({
      isSignedIn: state => state.isSignedIn,
    })
  },
  components: {
    CoreHeader: () => import("@/components/core/header/CoreHeader.vue"),
    CoreNavi: () => import("@/components/core/navi/CoreNavi.vue"),
    CoreBody: () => import("@/components/core/body/CoreBody.vue"),
  }
};
</script>
