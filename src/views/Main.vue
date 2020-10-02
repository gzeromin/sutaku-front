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
      <!-- question list -->
      <div id="core-question-list">
        <core-question-list v-if="false"/>  
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
  }),
  method: {
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
