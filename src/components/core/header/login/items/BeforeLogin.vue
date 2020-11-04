<template>
  <v-container>
    <v-row justify="center">
      <v-col md="10">
        <v-text-field
          label="e-mail"
          v-model="email"
          prepend-icon="mdi-account"
          type="text"
          dense
        ></v-text-field>
      </v-col>
    </v-row>    
    <v-row no-gutters justify="center">
      <v-col md="10">
        <v-text-field
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          type="password"
          dense
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row no-gutters justify="end">
      <v-switch 
        label="Stay singed in" 
        v-model="stayLogin" 
        color="indigo"
        dense 
      ></v-switch>
    </v-row>
    <v-row no-gutters justify="end">
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
    <v-divider></v-divider>
    <v-row>
      <v-btn text> login with facebook</v-btn>
      <v-btn text> login with google</v-btn>
    </v-row>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'BeforeSingIn',
  data: () => ({
    stayLogin: true,
    email: "jmin@sutaku.com",
    password: "0000",
  }),
  methods: {
    goToSignUp() {
      this.$router.push({
        path: '/signUp'
      })
    },
    goToLogin() {
      this.login(this.email, this.password);
    },
    ...mapActions(['login'])
  }
}
</script>