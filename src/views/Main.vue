<template>
  <div>
    <header>
      <core-header />
    </header>
    <div id="core-body">
      <!-- personal -->
      <div id="core-personal" v-if="isSignedIn">
        <core-personal />
      </div>
      <div id="folded-list" v-if="isFolded">
        <v-btn
          color="pink"
          dark
          small
          text
          @click="open"
        >
          <v-icon>mdi-arrow-left-bold</v-icon>
        </v-btn>
      </div>
      <!-- question list -->
      <div id="core-question-list" v-if="!isFolded">
        <v-btn
          color="pink"
          dark
          small
          text
          @click="fold"
        >
          <v-icon>mdi-arrow-right-bold</v-icon>
        </v-btn> 
        <core-question-list />  
      </div>
      <!-- view -->
      <div 
        :class="[isSignedIn ? 'core-view' : 'core-view-before-sign-in']">
        <core-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Main",
  data: ()=> ({
    isFolded: false,
  }),
  method: {
    fold() {
      this.isFolded = true;
    },
    open() {
      this.isFolded = false;
    }
  },
  computed: {
    ...mapState({
      isSignedIn: state => state.isSignedIn,
    })
  },
  components: {
    CoreHeader: () => import("@/components/core/CoreHeader.vue"),
    CorePersonal: () => import("@/components/core/CorePersonal.vue"),
    CoreView: () => import("@/components/core/CoreView.vue"),
    CoreQuestionList: () => import("@/components/core/CoreQuestionList.vue"),
  }
};
</script>
