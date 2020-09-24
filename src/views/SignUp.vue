<template>
  <div class="sign-up">
    <h1>This is a sign up page</h1>
    <v-btn
      color="indigo lighten-1 white--text"
      @click="goToMain"
    >
      back...
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'SignUp',
  methods: {
    goToMain() {
      this.$router.push({
        path:'/'
      })
    }
  }
}
</script>
<style scoped>
*{
  margin: 20% auto;
}
</style>
