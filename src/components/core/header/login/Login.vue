<template>
  <div>
    <!-- before log in -->
    <v-menu
      v-if="!isLogin"
      v-model="menu"
      :close-on-content-click="false"
      nudge-bottom="-50"
      nudge-left="220"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          id="login-btn"
          v-bind="attrs"
          v-on="on"
        >
          login
        </v-btn>
      </template>
      <div class="sign-card">
        <before-login />
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
          <after-login @signOut="menu = false"/>
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
      isLogin: state => state.isLogin,
    })
  },
  components: {
    BeforeLogin: () => import("@/components/core/header/login/items/BeforeLogin"),
    AfterLogin: () => import("@/components/core/header/login/items/AfterLogin"),
  },
}
</script>