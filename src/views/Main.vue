<template>
  <div class="home">
    <header>
      <core-header />
    </header>
    <div id="core-body">
      <!-- personal -->
      <div id="core-personal" v-show="isSigned">
        <core-personal />
      </div>
      <!-- view -->
      <div id="core-view">
        <core-view />
      </div>
      <!-- question list -->
      <div id="core-question-list" v-if="isSigned">bbb</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  data: ()=> ({
    isSigned: true,
  }),
  components: {
    CoreHeader: () => import("@/components/core/CoreHeader.vue"),
    CorePersonal: () => import("@/components/core/CorePersonal.vue"),
    CoreView: () => import("@/components/core/CoreView.vue")
  }
};
</script>
