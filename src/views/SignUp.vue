<template>
  <div>
    <v-container class="sign-up">
      <v-row justify="center">
        <h1><v-icon>mdi-star</v-icon>Join us<v-icon>mdi-star</v-icon></h1>
      </v-row>
      <br/>
      <v-row justify="center" no-gutters>
        <v-col md="3">
          id
        </v-col>
        <v-col md="5">
          <v-text-field
            class="text-h1"
            dense
            v-model="id"
          />
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col md="3">
          <v-icon>mdi-account</v-icon>email
        </v-col>
        <v-col md="5">
          <v-text-field
            class="text-h1"
            type="email"
            dense
            v-model="email"
          />
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col md="3" class="font-size-small">
          check email
        </v-col>
        <v-col md="5">
          <v-text-field
            type="text"
            dense
          />
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col md="3">
          <v-icon>mdi-lock</v-icon>password
        </v-col>
        <v-col md="5">
          <v-text-field
            type="password"
            dense
            v-model="pwd"
          />
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col md="3" class="font-size-small">
          check password
        </v-col>
        <v-col md="5">
          <v-text-field
            type="password"
            dense
          />
        </v-col>
      </v-row>
      <v-row justify="center"><v-icon>mdi-star-outline</v-icon></v-row>
      <v-row justify="center" no-gutters>
        <v-col md="3">
          <v-icon>mdi-star</v-icon>Name
        </v-col>
        <v-col md="5">
          <v-text-field
            type="text"
            dense
            v-model="name"
          />
        </v-col>
      </v-row>
      <v-row>

      </v-row>
      <v-row justify="center" no-gutters>
        <v-col md="3">
          <v-btn
            color="pink lighten-1 white--text"
            @click="signUpHandler"
          >
            Submit
          </v-btn>
        </v-col>
        <v-col md="2">
          <v-btn
            color="indigo lighten-1 white--text"
            @click="goToMain"
          >
            Cancel
          </v-btn>
        </v-col>
      </v-row>
      <br/><br/><br/>
      <v-row><v-divider/></v-row>
      <v-row justify="end">
        <v-col md="5">
          <v-btn
            text
          >Sign Up With Google</v-btn>
        </v-col>
        <v-col md="5">
          <v-btn
            text
          >Sign Up With Facebook</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'SignUp',
  data: () => ({
    id: "",
    pwd: "",
    name: "",
    email: ""
  }),
  methods: {
    goToMain() {
      this.$router.push({
        path:'/'
      })
    },
    signUpHandler() {
      const obj = { 
        id: this.id,
        pwd: this.pwd,
        name: this.name,
        email: this.email
      };
      this.signUp(obj);
    },
    ...mapActions('user/',[
      'signUp'
    ])
  }
}
</script>
<style scoped>
.sign-up {
  font-size: 3rem;
  width: 55%;
  margin: 17vh auto;
}
</style>
