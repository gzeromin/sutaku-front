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
            v-model="menu"
            :close-on-content-click="false"
            nudge-left="150px;"
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
                Sign in
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
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: 'CoreHeader',
    data: () => ({
      menu: false,
      isSignedIn: false,
    }),
    components: {
      BeforeSignIn: () => import("@/components/core/signIn/BeforeSignIn"),
      SignedIn: () => import("@/components/core/signIn/SignedIn")
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
.sign-card * {
  overflow: hidden;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
}
</style>