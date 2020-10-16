<template>
  <div>
    <!-- before sign in -->
    <v-menu
      v-if="!isSignedIn"
      v-model="menu"
      :close-on-content-click="false"
      nudge-bottom="-50"
      nudge-left="220"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>fas fa-user-alt</v-icon>
        </v-btn>
      </template>
      <div class="sign-card">
        <before-sign-in />
      </div>
    </v-menu>
    <!-- after sign in -->
    <div
      v-else
      class="after-sign-in"
    >
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        offset-y
      >
        <template v-slot:activator="{ on, attrs }">
          <div 
            id="avatar" 
            :style="{'background-image': 'url('+require('@/assets/img/jordy.png')+')'}"
            v-bind="attrs"
            v-on="on"
          ></div>
        </template>
        <div class="sign-card">
          <after-sign-in @signOut="menu = false"/>
        aaaaaaaaaaab
        </div>
      </v-menu>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    menu: false,
  }),  
  computed: {
    ...mapState({
      isSignedIn: state => state.isSignedIn,
    })
  },
  components: {
    BeforeSignIn: () => import("@/components/core/signIn/BeforeSignIn"),
    AfterSignIn: () => import("@/components/core/signIn/AfterSignIn"),
  },
}
</script>
<style scoped>
.sign-card {
  background: linear-gradient(-160deg, transparent 50px, white 0) top right;
}
.sign-card * {
  font-size: 14px;
}
.after-sign-in {

}
#avatar {
  display: block;
  align-items: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-size: cover;
  background-position: center center;
}
.sign-in-card {
  display: inline-block;
  width: 20%;
}
</style>