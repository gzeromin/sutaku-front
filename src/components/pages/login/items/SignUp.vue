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
      <v-row justify="center" no-gutters>
        <v-col>
          <v-text-field
            label="e-mail check"
            v-model="email_check"
            prepend-icon="mdi-check"
            type="text"
            dense
          ></v-text-field>
        </v-col>
      </v-row>    
      <v-row justify="center">
        <v-col>
          <v-text-field
            v-model="pwd"
            label="Password"
            prepend-icon="mdi-lock"
            type="password"
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center" no-gutters>
        <v-col>
          <v-text-field
            v-model="pwd_check"
            label="Password check"
            prepend-icon="mdi-check"
            type="password"
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="end">
        <v-btn
          text
          color="indigo"
          @click="cancel"
        >
          Cancel
        </v-btn>
        <v-btn 
          color="pink lighten-1" 
          text 
          @click="signUpHandler"
        >
          Regist
        </v-btn>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'SignUp',
  data: () => ({
    email: "",
    pwd: "",
    email_check: "",
    pwd_check: "",
  }),
  methods: {
    signUpHandler() {
      const obj = { 
        email: this.email,
        pwd: this.pwd,
        id: "id",
        name: "name",
      };
      this.signUp(obj);
    },
    cancel() {
      this.$emit('cancel');
    },
    ...mapActions('user/',[
      'signUp'
    ])
  }
}
</script>