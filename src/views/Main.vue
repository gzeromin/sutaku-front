<template>
  <div>
    <core-header id="core-header"/>
    <core-personal id="core-personal"/>
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
    CorePersonal: () => import("@/components/core/personal/CorePersonal.vue"),
    CoreBody: () => import("@/components/core/body/CoreBody.vue"),
  }
};
</script>
