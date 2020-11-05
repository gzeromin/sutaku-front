<template>
  <div>
    <core-header class="core-header"/>
    <core-personal class="core-personal" v-if="isLogin"/>
    <core-body :class="[isLogin ? 'core-body' : 'core-body-wide']"/>
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
      isLogin: state => state.isLogin,
    })
  },
  components: {
    CoreHeader: () => import("@/components/core/header/CoreHeader.vue"),
    CorePersonal: () => import("@/components/core/personal/CorePersonal.vue"),
    CoreBody: () => import("@/components/core/body/CoreBody.vue"),
  }
};
</script>
