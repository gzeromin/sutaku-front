<template>
  <div>
    <v-btn color="primary" text @click="goToSignOut">Sign out</v-btn>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
  export default {
    name: 'AfterSignIn',
    data: () => ({
    }),
    methods: {
      goToSignOut() {
        this.SET_IS_SIGNED_IN(false);
        this.$emit("signOut");
      },
      ...mapMutations(['SET_IS_SIGNED_IN'])
    },
  }
</script>