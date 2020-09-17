<template>
  <div class="home">
    <header>
      <core-header />
    </header>
    <div id="core-body">
      <!-- personal -->
      <div id="core-personal">
        <core-personal />
      </div>
      <!-- view -->
      <div id="core-view">
        <core-view />
      </div>
      <!-- question list -->
      <div id="core-question-list">bbb</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {
    CoreHeader: () => import("@/components/core/CoreHeader.vue"),
    CorePersonal: () => import("@/components/core/CorePersonal.vue"),
    CoreView: () => import("@/components/core/CoreView.vue")
  }
};
</script>
