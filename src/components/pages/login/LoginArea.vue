<template>
  <div>
    <login class="login" 
      v-if="!showSignUpArea"
      @signUp="showSignUpArea = true"
    />
    <signUp class="sign-up" 
      v-else
      @cancel="showSignUpArea = false"
    />
  </div>
</template>
<script>
  export default {
    data: () => ({
      showSignUpArea: false,
    }),
    methods: {
    },
    components: {
      Login: () =>  import("@/components/pages/login/items/Login.vue"),
      SignUp: () =>  import("@/components/pages/login/items/SignUp.vue"),
    }
  }
</script>
<style lang='scss' scoped>
.login {
  margin: 30vh auto;
  width: 20vw;
}
.sign-up {
  margin: 25vh auto;
  width: 20vw;
}
</style>