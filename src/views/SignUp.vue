<template>
  <div>
    <v-container class="sign-up">
      <v-row justify="center">
        <h1><v-icon>mdi-star</v-icon>Join us<v-icon>mdi-star</v-icon></h1>
      </v-row>
      <br/>
      <v-row justify="center" no-gutters>
        <v-col md="3">
          <v-icon>mdi-account</v-icon>email
        </v-col>
        <v-col md="5">
          <v-text-field
            class="text-h1"
            type="email"
            dense
          />
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col md="3">
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
          />
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col md="3">
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
          />
        </v-col>
      </v-row>
      <v-row>

      </v-row>
      <v-row justify="center" no-gutters>
        <v-col md="3">
          <v-btn
            color="pink lighten-1 white--text"
            @click="goToMain"
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
      <br/>
      <v-row><v-divider/></v-row>
      <v-row justify="center">
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
.sign-up {
  width: 55%;
  margin: 50px auto;
}
</style>
