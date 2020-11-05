<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col>
          <v-text-field
            label="e-mail"
            v-model="email"
            prepend-icon="mdi-account"
            type="text"
            dense
          ></v-text-field>
        </v-col>
      </v-row>    
      <v-row justify="center">
        <v-col>
          <v-text-field
            v-model="password"
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-btn
          text
          color="indigo"
          @click="goToLogin"
        >
          Login
        </v-btn>
        <v-btn 
          color="pink lighten-1" 
          text 
          @click="goToSignUp"
        >
          Sign up
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    email: "jmin@sutaku.com",
    password: "0000",
  }),
  methods: {
    goToSignUp() {
      this.$emit("signUp", true);
    },
    goToLogin() {
      this.login(this.email, this.password);
      this.SET_FUNC_NAVI('home');
    },
    ...mapActions(['login']),
    ...mapMutations(['SET_FUNC_NAVI'])
  },
}
</script>