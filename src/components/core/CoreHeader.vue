<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          md="5"
          class="ml-md-auto"
        >
          <v-text-field 
            prepend-inner-icon="fas fa-question"
            placeholder="Any math question"
            outlined
          >
          </v-text-field>
        </v-col>
        <v-col
          md="2"
          class="ml-md-auto"
        >
          <v-menu
            v-if="!isSignedIn"
            v-model="menu"
            :close-on-content-click="false"
            nudge-bottom="7px;"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="indigo"
                dark
                v-bind="attrs"
                v-on="on"
              >
                Sign In
              </v-btn>
            </template>

            <!-- before sign in -->
            <v-card
              class="sign-card"
              v-if="!isSignedIn"
              height= "100%"
            >
              <before-sign-in />
            </v-card>

            <!-- after sign in -->
            <v-card v-else>
              <signed-in />
            </v-card>
          </v-menu>
          <v-btn
            v-else
            color="indigo"
            dark
            @click="goToSignOut"
          >
            Sign Out
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'CoreHeader',
  data: () => ({
    menu: false,
  }),
  components: {
    BeforeSignIn: () => import("@/components/core/signIn/BeforeSignIn"),
    SignedIn: () => import("@/components/core/signIn/SignedIn")
  },
  methods: {
    goToSignOut() {
      this.signIn(false);
      this.menu = false;
    },
    ...mapActions(['signIn'])
  },
  computed: {
    ...mapState({
      isSignedIn: state => state.isSignedIn,
    })
  }
}
</script>
<style>
.sign-card * {
  overflow: hidden;
  font-size: 14px;
}
</style>